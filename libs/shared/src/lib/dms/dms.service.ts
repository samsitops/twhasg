import {
  GetObjectCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';

import { ConfigService } from '@monorepo/config';
import { IFile } from '../types';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DmsService {
  private client: S3Client;
  private readonly bucketName;
  private readonly logger = new Logger(DmsService.name);

  constructor() {
    const s3Region = ConfigService.get().dms?.s3?.region;
    const bucketUrl = ConfigService.get().dms?.s3?.bucketURL;
    const accessKeyId = ConfigService.get().dms?.s3?.accessKey;
    const secretAccessKey = ConfigService.get().dms?.s3?.secretAccessKey;

    if (!s3Region || !bucketUrl || !accessKeyId || !secretAccessKey) {
      this.logger.error('Missing S3 configuration values.');
      throw new Error('S3 configuration values are missing.');
    }

    this.bucketName = ConfigService.get().dms?.s3?.bucketName;

    // Initialize S3Client
    this.client = new S3Client({
      region: s3Region,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      endpoint: bucketUrl, // DigitalOcean Spaces endpoint
      forcePathStyle: true, // Required for DigitalOcean Spaces
    });
  }

  async uploadSingleFile({
    file,
    isPublic = true,
  }: {
    file: IFile;
    isPublic: boolean;
  }) {
    try {
      const key = `${uuidv4()}`;
      const command = new PutObjectCommand({
        Bucket: this.bucketName,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: isPublic ? 'public-read' : 'private',
        Metadata: {
          originalName: file.originalname,
        },
      });

      await this.client.send(command);

      const url = isPublic
        ? (await this.getFileUrl(key)).url
        : (await this.getPresignedSignedUrl(key)).url;

      return { url, key, isPublic };
    } catch (e) {
      this.logger.error(
        `Error uploading file: ${file.originalname} Details: ` +
          JSON.stringify(e),
      );
      throw new InternalServerErrorException('File upload failed.');
    }
  }

  async getFileUrl(key: string) {
    try {
      return { url: `${ConfigService.get().dms?.s3?.bucketURL}/${key}` };
    } catch (e) {
      this.logger.error(e);
      throw new InternalServerErrorException('Error generating file URL.');
    }
  }

  async getPresignedSignedUrl(key: string) {
    try {
      const command = new GetObjectCommand({
        Bucket: this.bucketName,
        Key: key,
      });

      const url = await getSignedUrl(this.client, command, {
        expiresIn: 60 * 60 * 24, // 24 hours
      });

      return { url };
    } catch (e) {
      this.logger.error(
        'Error generating presigned URL for key:' +
          key +
          ' Details:' +
          JSON.stringify(e),
      );
      throw new HttpException(
        'Error generating presigned URL.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

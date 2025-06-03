import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { existsSync, mkdirSync, readFileSync, unlinkSync, writeFileSync } from 'fs';

import { ConfigService } from '@monorepo/config';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FileUploadService {
  private _appFolder: string;
  private readonly uploadPath: string; // Directory for uploaded files

  constructor(appFolder: string) {
    this._appFolder = appFolder;
    this.uploadPath = join(__dirname, '../../uploads/' + this._appFolder);
    // Ensure the upload directory exists
    if (!existsSync(this.uploadPath)) {
      mkdirSync(this.uploadPath, { recursive: true });
    }
  }

  /**
   * Save a single file to the upload directory.
   * @param file - Buffer of the file data
   * @param originalName - Original name of the file
   * @returns Path to the saved file
   */
  saveFile(file: Buffer, originalName: string): string {
    try {
      const uniqueFilename = `${uuidv4()}-${originalName}`;
      const filePath = join(this.uploadPath, uniqueFilename);
      writeFileSync(filePath, file);
      return filePath;


    } catch (error) {
      throw new HttpException('Error saving file', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  /**
   * Retrieve a file's content from the upload directory.
   * @param filePath - Path to the file
   * @returns File content as a Buffer
   */
  retrieveFile(filePath: string): Buffer {
    try {
      if (!existsSync(filePath)) {
        throw new HttpException('File not found', HttpStatus.NOT_FOUND);
      }
      return readFileSync(filePath);
    } catch (error: any) {
      throw new HttpException(
        `Error retrieving file: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Delete a file from the upload directory.
   * @param filePath - Path to the file
   */
  deleteFile(filePath: string): void {
    try {
      if (existsSync(filePath)) {
        unlinkSync(filePath);
      }
    } catch (error: any) {
      throw new HttpException(
        `Error deleting file: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Validate uploaded file type and size.
   * @param file - File object with buffer, mimetype, and size
   * @param allowedMimeTypes - Array of allowed mime types
   * @param maxSize - Maximum file size in bytes
   */
  validateFile(
    file: { buffer: Buffer; mimetype: string; size: number },
    allowedMimeTypes: string[],
    maxSize: number,
  ): void {
    const { mimetype, size } = file;

    if (!allowedMimeTypes.includes(mimetype)) {
      throw new HttpException(
        `Invalid file type. Allowed types: ${allowedMimeTypes.join(', ')}`,
        HttpStatus.BAD_REQUEST,
      );
    }

    if (size > maxSize) {
      throw new HttpException(
        `File too large. Maximum allowed size is ${maxSize / 1024 / 1024} MB`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}

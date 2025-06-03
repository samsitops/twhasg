import {
  Controller,
  Post,
  Get,
  Param,
  UploadedFile,
  UseInterceptors,
  StreamableFile,
  Logger,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { Multer } from 'multer';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { ConfigService } from '@nestjs/config';

@Controller('files')
export class FileController {
  private readonly supabase: SupabaseClient;
  private readonly logger = new Logger(FileController.name);
  private readonly bucketName = 'files';

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const filePath = `${Date.now()}-${file.originalname}`;
      const { data, error } = await this.supabase.storage
        .from(this.bucketName)
        .upload(filePath, file.buffer, {
          contentType: file.mimetype,
        });

      if (error) {
        this.logger.error(`Upload failed: ${error.message}`);
        throw new Error(`Upload failed: ${error.message}`);
      }

      const { data: publicUrlData } = this.supabase.storage
        .from(this.bucketName)
        .getPublicUrl(filePath);

      return {
        message: 'File uploaded successfully',
        url: publicUrlData.publicUrl,
        path: filePath,
      };
    } catch (error) {
      this.logger.error(`Upload error: ${error.message}`);
      throw error;
    }
  }

  @Get(':filePath')
  async getFile(@Param('filePath') filePath: string) {
    try {
      const { data, error } = await this.supabase.storage
        .from(this.bucketName)
        .download(filePath);

      if (error) {
        this.logger.error(`Download failed: ${error.message}`);
        throw new Error(`Download failed: ${error.message}`);
      }

      const buffer = Buffer.from(await data.arrayBuffer());
      return new StreamableFile(buffer);
    } catch (error) {
      this.logger.error(`Download error: ${error.message}`);
      throw error;
    }
  }
}

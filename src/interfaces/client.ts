import { UploadedFile } from '@nestjs/common';

export interface IClient {
  id?: number;
  name: string;
  email: string;
  about: string;
  facebook?: string;
  linkedin?: string;
  twitter?: string;
  instagram?: string;
  profileImage?: Express.Multer.File;
}

export interface ICreateClient extends Omit<IClient, 'id'> {
  profileImage?: Express.Multer.File;
}

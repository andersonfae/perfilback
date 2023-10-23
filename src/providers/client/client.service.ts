import { Injectable } from '@nestjs/common';
import { IClient } from 'src/interfaces/client';
import { prisma } from 'src/prisma';
import { Express } from 'express';
@Injectable()
export class ClientService {
  constructor() {}
  async createClient(body: IClient, profileImage: Express.Multer.File) {
    const response = await prisma.client.create({
      data: {
        name: body.name,
        email: body.email,
        about: body.about,
        facebook: body.facebook,
        linkedin: body.linkedin,
        twitter: body.twitter,
        instagram: body.instagram,
        profileImage: profileImage.buffer,
      },
    });

    return response;
  }

  async getClient(id: number) {
    const response = await prisma.client.findFirst({
      where: {
        id: id,
      },
    });
    return response;
  }

  async getClients() {
    const response = await prisma.client.findMany();

    return response;
  }

  async updateClient(body: IClient) {
    return await prisma.client.update({
      where: {
        id: body.id,
      },
      data: {
        name: body.name,
        email: body.email,
        about: body.about,
        facebook: body.facebook,
        linkedin: body.linkedin,
        twitter: body.twitter,
        instagram: body.instagram,
      },
    });
  }

  async deleteClient(id: number) {
    const response = await prisma.client.delete({
      where: {
        id: id,
      },
    });

    return response;
  }
}

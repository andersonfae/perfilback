import { Controller, Delete, Put } from '@nestjs/common';
import { Body, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ClientDto } from 'src/dtos/client.dto';
import { IClient } from 'src/interfaces/client';
import { ClientService } from 'src/providers/client/client.service';

@ApiTags('Client')
@Controller('client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Post('create')
  @ApiBody({ type: ClientDto })
  @ApiOperation({ description: 'Create a Client' })
  async createNewClient(@Body() clientInfo: IClient) {
    return await this.clientService.createClient(clientInfo);
  }
  @Get('get/:clientId')
  @ApiOperation({ description: 'Get Client by Id' })
  async getClient(@Param('clientId') clientId: string) {
    return await this.clientService.getClient(Number(clientId));
  }

  @Get('getall')
  @ApiOperation({ description: 'Get all Clients' })
  async getClients() {
    return await this.clientService.getClients();
  }

  @Put('update')
  @ApiBody({ type: ClientDto })
  @ApiOperation({ description: 'Update a Client' })
  async updateClient(@Body() clientInfo: IClient) {}
  @Delete('delete/:clientId')
  @ApiOperation({ description: 'Delete Client by Id' })
  async deleteClient(@Param('clientId') clientId: string) {
    return await this.clientService.deleteClient(Number(clientId));
  }
}

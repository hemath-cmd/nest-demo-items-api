import { Injectable } from '@nestjs/common';

@Injectable()
export class ItemsService {
  findAll() {
    return { message: 'Items list' };
  }
}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module'; // <-- இது இருக்கா?

@Module({
  imports: [ItemsModule], // <-- இது இருக்கா?
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
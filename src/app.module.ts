import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestContextMiddleware } from './common/middleware/request-context.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // எல்லா Route-க்கும் RequestContextMiddleware போடு
    consumer
     .apply(RequestContextMiddleware)
     .forRoutes('*');
  }
}
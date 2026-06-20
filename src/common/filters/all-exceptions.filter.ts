import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
    const message = exception instanceof HttpException ? exception.getResponse() : 'Internal server error';
    const requestId = (request as any).id;

    response.status(status).json({
      statusCode: status,
      error: exception instanceof HttpException ? exception.name : 'InternalServerError',
      message: typeof message === 'string' ? message : (message as any).message,
      requestId,
      timestamp: new Date().toISOString(),
      path: request.url
    });
  }
}
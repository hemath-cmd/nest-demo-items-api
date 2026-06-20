import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { randomUUID } from 'crypto';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const requestId = req.headers['x-request-id'] as string || randomUUID();
    (req as any).id = requestId; // req.id-ல attach பண்றோம்
    res.setHeader('x-request-id', requestId);
    next();
  }
}
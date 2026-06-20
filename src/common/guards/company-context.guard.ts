import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class CompanyContextGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    // JWT இல்லாததால Header-ல இருந்து எடுக்குறோம். இல்லனா default
    const companyId = request.headers['x-company-id'] || 'stub-company-123';
    request.companyId = companyId;
    return true;
  }
}
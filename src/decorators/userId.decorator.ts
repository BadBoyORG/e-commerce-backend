import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { authorizantionToLoginPayload } from '../utils/base64Converter';

export const UserId = createParamDecorator((_, ctx: ExecutionContext) => {
  const { authorization } = ctx.switchToHttp().getRequest().headers;

  const loginPayload = authorizantionToLoginPayload(authorization);

  return loginPayload?.id;
});

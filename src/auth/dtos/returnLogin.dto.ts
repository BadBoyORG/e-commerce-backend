import { ReturnUserDto } from '../../users/dtos/returnUser.dto';

export class ReturnLoginDto {
  user: ReturnUserDto;
  acessToken: string;
}

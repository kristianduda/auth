import { Controller, Get, Request } from '@nestjs/common';
import { Role } from '../auth/enums/role.enum';
import { Auth } from '../auth/decorators/auth.decorator';

@Controller('users')
export class UsersController {  
    
  @Auth(Role.Admin)
  @Get('profile')
  isAdmin(@Request() req) {
    return req.user;
  }
}

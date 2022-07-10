import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { Role } from './auth/enums/role.enum';
import { Roles } from './auth/decorators/roles.decorator';
import { Auth } from './auth/decorators/auth.decorator';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Auth(Role.Admin)
  @Get('admin')
  isAdmin(@Request() req) {
    return req.user;
  }
}

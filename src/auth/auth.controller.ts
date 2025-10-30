import { Controller, Get, Request, Response, UseGuards } from '@nestjs/common';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { User } from '@prisma/client';
import type { Request as Req, Response as Res } from 'express';
import { AuthService } from './auth.service';
import { ConfigService } from '@nestjs/config';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';

interface AuthenticatedRequest extends Req {
  user: User;
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin(){}

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(
    @Request() req: AuthenticatedRequest,
    @Response() res: Res,
  ) {
    const fronUrl = this.configService.get<string>('FRONT_END_URL');
    const data = await this.authService.login(req.user);
    const url = `${fronUrl}/api/auth/google/callback?userId=${data.id}&name=${data.name}&avatar=${data.avatar}&accessToken=${data.accessToken}`;
    res.redirect(url);
  }


  @UseGuards(JwtAuthGuard)
  @Get('verify-token')
  virify() {
    return 'ok';
  }
}

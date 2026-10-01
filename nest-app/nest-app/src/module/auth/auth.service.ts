import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(userData: any) {
    return {
      message: 'User registered successfully',
      user: userData,
    };
  }

  login(credentials: any) {
    return {
      message: 'User logged in successfully',
      token: 'jwt-token-sample',
    };
  }
}
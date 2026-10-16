import { AuthService } from './auth.service';
import { RegisterUserDto, LoginUserDto } from './auth.dto';

export class AuthController {
  constructor(private authService: AuthService) {}

  async handleRegister(dto: RegisterUserDto) {
    return this.authService.register(dto);
  }

  async handleLogin(dto: LoginUserDto) {
    return this.authService.login(dto);
  }
}

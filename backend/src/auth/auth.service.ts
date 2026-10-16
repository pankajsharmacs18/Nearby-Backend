import { UserProfile, UserRole } from '@local-commerce/lib';
import { RegisterUserDto, LoginUserDto } from './auth.dto';

export class AuthService {
  async register(dto: RegisterUserDto): Promise<UserProfile> {
    return {
      id: 'usr_' + Date.now(),
      email: dto.email,
      fullName: dto.fullName,
      role: dto.role || UserRole.CUSTOMER,
      isVerified: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async login(dto: LoginUserDto): Promise<{ token: string }> {
    return { token: `jwt_token_for_${dto.email}` };
  }
}

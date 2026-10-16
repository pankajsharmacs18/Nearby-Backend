import { UserRole } from '@local-commerce/lib';

export interface RegisterUserDto {
  email: string;
  fullName: string;
  role: UserRole;
  phoneNumber?: string;
}

export interface LoginUserDto {
  email: string;
}

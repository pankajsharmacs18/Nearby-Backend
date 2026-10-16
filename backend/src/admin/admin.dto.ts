import { AuditAction, ShopStatus } from '@local-commerce/lib';

export interface AuditShopDto {
  shopId: string;
  status: ShopStatus;
  reason: string;
}

export interface ModerationDto {
  productId: string;
  isApproved: boolean;
  reason: string;
}

import { AuditLog, AuditAction, ShopStatus } from '@local-commerce/lib';
import { AuditShopDto, ModerationDto } from './admin.dto';

export class AdminService {
  async auditShop(adminUserId: string, dto: AuditShopDto): Promise<AuditLog> {
    return {
      id: 'log_' + Date.now(),
      adminUserId,
      action: dto.status === ShopStatus.APPROVED ? AuditAction.SELLER_APPROVED : AuditAction.SELLER_REJECTED,
      targetEntityId: dto.shopId,
      reason: dto.reason,
      createdAt: new Date(),
    };
  }

  async moderateProduct(adminUserId: string, dto: ModerationDto): Promise<AuditLog> {
    return {
      id: 'log_' + Date.now(),
      adminUserId,
      action: AuditAction.CATALOG_MODERATED,
      targetEntityId: dto.productId,
      reason: dto.reason,
      createdAt: new Date(),
    };
  }
}

import { AdminService } from './admin.service';
import { AuditShopDto, ModerationDto } from './admin.dto';

export class AdminController {
  constructor(private adminService: AdminService) {}

  async auditShop(adminUserId: string, dto: AuditShopDto) {
    return this.adminService.auditShop(adminUserId, dto);
  }

  async moderateProduct(adminUserId: string, dto: ModerationDto) {
    return this.adminService.moderateProduct(adminUserId, dto);
  }
}

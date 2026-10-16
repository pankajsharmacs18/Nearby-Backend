import { ShopsService } from './shops.service';
import { CreateShopDto, UpdateShopStatusDto } from './shops.dto';

export class ShopsController {
  constructor(private shopsService: ShopsService) {}

  async createShop(sellerId: string, dto: CreateShopDto) {
    return this.shopsService.createShop(sellerId, dto);
  }

  async updateStatus(shopId: string, dto: UpdateShopStatusDto) {
    return this.shopsService.updateShopStatus(shopId, dto);
  }

  async getShopsByLocality(locality: string) {
    return this.shopsService.getShopsByLocality(locality);
  }
}

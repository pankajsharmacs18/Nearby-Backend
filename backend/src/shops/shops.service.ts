import { Shop, ShopStatus } from '@local-commerce/lib';
import { CreateShopDto, UpdateShopStatusDto } from './shops.dto';

export class ShopsService {
  async createShop(sellerId: string, dto: CreateShopDto): Promise<Shop> {
    return {
      id: 'shop_' + Date.now(),
      sellerId,
      ...dto,
      status: ShopStatus.PENDING_APPROVAL,
      isCurrentlyOpen: false,
      operatingHours: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async updateShopStatus(shopId: string, dto: UpdateShopStatusDto): Promise<{ shopId: string; isCurrentlyOpen: boolean }> {
    return { shopId, isCurrentlyOpen: dto.isCurrentlyOpen };
  }

  async getShopsByLocality(locality: string): Promise<Shop[]> {
    return [];
  }
}

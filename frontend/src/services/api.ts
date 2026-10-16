import { Shop, Product, Cart } from '@local-commerce/lib';

export class ApiService {
  async fetchShopsByLocality(locality: string): Promise<Shop[]> {
    return [];
  }

  async fetchProductsByShop(shopId: string): Promise<Product[]> {
    return [];
  }

  async fetchCart(): Promise<Cart | null> {
    return null;
  }
}

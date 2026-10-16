import { Cart } from '@local-commerce/lib';
import { AddToCartDto, RemoveFromCartDto } from './cart.dto';

export class CartService {
  async getCart(customerId: string): Promise<Cart> {
    return {
      id: 'cart_' + customerId,
      customerId,
      groups: [],
      updatedAt: new Date(),
    };
  }

  async addToCart(customerId: string, dto: AddToCartDto): Promise<Cart> {
    return this.getCart(customerId);
  }

  async removeFromCart(customerId: string, dto: RemoveFromCartDto): Promise<Cart> {
    return this.getCart(customerId);
  }
}

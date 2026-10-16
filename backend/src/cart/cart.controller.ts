import { CartService } from './cart.service';
import { AddToCartDto, RemoveFromCartDto } from './cart.dto';

export class CartController {
  constructor(private cartService: CartService) {}

  async getCart(customerId: string) {
    return this.cartService.getCart(customerId);
  }

  async addToCart(customerId: string, dto: AddToCartDto) {
    return this.cartService.addToCart(customerId, dto);
  }

  async removeFromCart(customerId: string, dto: RemoveFromCartDto) {
    return this.cartService.removeFromCart(customerId, dto);
  }
}

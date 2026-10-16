import { OrdersService } from './orders.service';
import { CheckoutDto, UpdateOrderStatusDto } from './orders.dto';

export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  async checkout(customerId: string, dto: CheckoutDto) {
    return this.ordersService.checkout(customerId, dto);
  }

  async updateStatus(orderId: string, dto: UpdateOrderStatusDto) {
    return this.ordersService.updateStatus(orderId, dto);
  }

  async getOrder(orderId: string) {
    return this.ordersService.getOrder(orderId);
  }
}

import { Order, OrderStatus } from '@local-commerce/lib';
import { CheckoutDto, UpdateOrderStatusDto } from './orders.dto';

export class OrdersService {
  async checkout(customerId: string, dto: CheckoutDto): Promise<Order> {
    return {
      id: 'ord_' + Date.now(),
      customerId,
      shopId: dto.shopId,
      items: [],
      itemSubtotal: 0,
      deliveryFee: 30,
      discountTotal: 0,
      taxTotal: 0,
      grandTotal: 30,
      status: OrderStatus.ORDER_CREATED,
      deliveryAddressId: dto.deliveryAddressId,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async updateStatus(orderId: string, dto: UpdateOrderStatusDto): Promise<{ orderId: string; status: OrderStatus }> {
    return { orderId, status: dto.status };
  }

  async getOrder(orderId: string): Promise<Order | null> {
    return null;
  }
}

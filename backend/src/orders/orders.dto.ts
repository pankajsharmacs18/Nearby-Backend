import { OrderStatus } from '@local-commerce/lib';

export interface CheckoutDto {
  shopId: string;
  deliveryAddressId: string;
}

export interface UpdateOrderStatusDto {
  status: OrderStatus;
  reason?: string;
}

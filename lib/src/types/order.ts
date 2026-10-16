export enum OrderStatus {
  CART = 'CART',
  CHECKOUT_VALIDATION = 'CHECKOUT_VALIDATION',
  ORDER_CREATED = 'ORDER_CREATED',
  PAYMENT_PENDING = 'PAYMENT_PENDING',
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  PAYMENT_EXPIRED = 'PAYMENT_EXPIRED',
  CONFIRMED = 'CONFIRMED',
  SELLER_ACCEPTED = 'SELLER_ACCEPTED',
  SELLER_REJECTED = 'SELLER_REJECTED',
  PACKING = 'PACKING',
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  IN_TRANSIT = 'IN_TRANSIT',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
  RETURN_REQUESTED = 'RETURN_REQUESTED',
  RETURN_APPROVED = 'RETURN_APPROVED',
  RETURN_REJECTED = 'RETURN_REJECTED',
  REFUND_PENDING = 'REFUND_PENDING',
  REFUND_FAILED_REQUIRES_REVIEW = 'REFUND_FAILED_REQUIRES_REVIEW',
  REFUNDED = 'REFUNDED',
  COMPLETED = 'COMPLETED',
}

export interface OrderItemSnapshot {
  productId: string;
  title: string;
  unitPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface Order {
  id: string;
  customerId: string;
  shopId: string;
  items: OrderItemSnapshot[];
  itemSubtotal: number;
  deliveryFee: number;
  discountTotal: number;
  taxTotal: number;
  grandTotal: number;
  status: OrderStatus;
  deliveryAddressId: string;
  createdAt: Date;
  updatedAt: Date;
}

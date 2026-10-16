import { PaymentMethod } from '@local-commerce/lib';

export interface InitiatePaymentDto {
  orderId: string;
  method: PaymentMethod;
}

export interface WebhookCallbackDto {
  eventId: string;
  transactionId: string;
  orderId: string;
  status: string;
  signature: string;
}

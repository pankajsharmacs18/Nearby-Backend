import { PaymentTransaction, PaymentStatus } from '@local-commerce/lib';
import { InitiatePaymentDto, WebhookCallbackDto } from './payments.dto';

export class PaymentsService {
  async initiatePayment(dto: InitiatePaymentDto): Promise<PaymentTransaction> {
    return {
      id: 'pay_' + Date.now(),
      orderId: dto.orderId,
      method: dto.method,
      status: PaymentStatus.PENDING,
      amount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  async processWebhook(dto: WebhookCallbackDto): Promise<{ success: boolean }> {
    return { success: true };
  }
}

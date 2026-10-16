import { PaymentsService } from './payments.service';
import { InitiatePaymentDto, WebhookCallbackDto } from './payments.dto';

export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  async initiatePayment(dto: InitiatePaymentDto) {
    return this.paymentsService.initiatePayment(dto);
  }

  async handleWebhook(dto: WebhookCallbackDto) {
    return this.paymentsService.processWebhook(dto);
  }
}

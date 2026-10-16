export enum PaymentMethod {
  ONLINE = 'ONLINE',
  COD = 'COD',
}

export enum PaymentStatus {
  PENDING = 'PENDING',
  CAPTURED = 'CAPTURED',
  FAILED = 'FAILED',
  REFUNDED = 'REFUNDED',
}

export interface PaymentTransaction {
  id: string;
  orderId: string;
  method: PaymentMethod;
  status: PaymentStatus;
  amount: number;
  gatewayTransactionId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SettlementLedger {
  id: string;
  shopId: string;
  orderId: string;
  grossAmount: number;
  platformCommission: number;
  netPayout: number;
  isSettled: boolean;
  settledAt?: Date;
  createdAt: Date;
}

export enum AuditAction {
  SELLER_APPROVED = 'SELLER_APPROVED',
  SELLER_REJECTED = 'SELLER_REJECTED',
  STORE_SUSPENDED = 'STORE_SUSPENDED',
  CATALOG_MODERATED = 'CATALOG_MODERATED',
  DISPUTE_RESOLVED = 'DISPUTE_RESOLVED',
  FEE_ADJUSTED = 'FEE_ADJUSTED',
}

export interface AuditLog {
  id: string;
  adminUserId: string;
  action: AuditAction;
  targetEntityId: string;
  reason: string;
  metadata?: Record<string, unknown>;
  createdAt: Date;
}

export interface MerchantKYC {
  id: string;
  sellerId: string;
  gstin?: string;
  pan: string;
  businessProofUrl: string;
  bankAccountDetails: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
  isVerified: boolean;
  submittedAt: Date;
  verifiedAt?: Date;
}

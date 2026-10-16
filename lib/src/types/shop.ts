export enum ShopStatus {
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  SUSPENDED = 'SUSPENDED',
}

export interface OperatingHours {
  dayOfWeek: number; // 0 = Sunday, 1 = Monday, etc.
  openTime: string; // '09:00'
  closeTime: string; // '21:00'
  isOpen: boolean;
}

export interface Shop {
  id: string;
  sellerId: string;
  name: string;
  description?: string;
  address: string;
  locality: string;
  pincode: string;
  latitude: number;
  longitude: number;
  serviceRadiusKm: number;
  status: ShopStatus;
  isCurrentlyOpen: boolean;
  operatingHours: OperatingHours[];
  createdAt: Date;
  updatedAt: Date;
}

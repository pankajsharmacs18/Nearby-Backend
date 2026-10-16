export interface CreateShopDto {
  name: string;
  description?: string;
  address: string;
  locality: string;
  pincode: string;
  latitude: number;
  longitude: number;
  serviceRadiusKm: number;
}

export interface UpdateShopStatusDto {
  isCurrentlyOpen: boolean;
}

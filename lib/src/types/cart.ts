export interface CartItem {
  productId: string;
  shopId: string;
  quantity: number;
  unitPrice: number;
}

export interface CartGroup {
  shopId: string;
  items: CartItem[];
  subtotal: number;
}

export interface Cart {
  id: string;
  customerId: string;
  groups: CartGroup[];
  updatedAt: Date;
}

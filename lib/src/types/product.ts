export interface Product {
  id: string;
  shopId: string;
  title: string;
  description: string;
  category: string;
  brand?: string;
  images: string[];
  sellingPrice: number;
  listPrice?: number; // MSRP/MRP
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Inventory {
  productId: string;
  shopId: string;
  stockQuantity: number;
  reservedQuantity: number;
  updatedAt: Date;
}

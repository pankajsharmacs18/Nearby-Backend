export interface CreateProductDto {
  shopId: string;
  title: string;
  description: string;
  category: string;
  brand?: string;
  images: string[];
  sellingPrice: number;
  listPrice?: number;
  initialStock: number;
}

export interface UpdateInventoryDto {
  stockQuantity: number;
}

export interface AddToCartDto {
  productId: string;
  shopId: string;
  quantity: number;
}

export interface RemoveFromCartDto {
  productId: string;
  shopId: string;
}

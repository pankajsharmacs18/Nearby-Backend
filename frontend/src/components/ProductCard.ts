import { Product } from '@local-commerce/lib';

export function ProductCard(props: { product: Product }) {
  return `[ProductCard Component] Product: ${props.product.title} - ₹${props.product.sellingPrice}`;
}

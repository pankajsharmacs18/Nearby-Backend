import { Shop } from '@local-commerce/lib';

export function ShopCard(props: { shop: Shop }) {
  return `[ShopCard Component] Shop: ${props.shop.name} (${props.shop.isCurrentlyOpen ? 'Open' : 'Closed'})`;
}

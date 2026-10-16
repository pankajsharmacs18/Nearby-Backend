import { Cart } from '@local-commerce/lib';

export function CartDrawer(props: { cart: Cart }) {
  return `[CartDrawer Component] Cart Groups: ${props.cart.groups.length}`;
}

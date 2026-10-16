import { ProductsService } from './products.service';
import { CreateProductDto, UpdateInventoryDto } from './products.dto';

export class ProductsController {
  constructor(private productsService: ProductsService) {}

  async createProduct(dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  async updateInventory(productId: string, dto: UpdateInventoryDto) {
    return this.productsService.updateInventory(productId, dto);
  }

  async getProductsByShop(shopId: string) {
    return this.productsService.getProductsByShop(shopId);
  }
}

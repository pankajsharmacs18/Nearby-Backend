import { Product, Inventory } from '@local-commerce/lib';
import { CreateProductDto, UpdateInventoryDto } from './products.dto';

export class ProductsService {
  async createProduct(dto: CreateProductDto): Promise<{ product: Product; inventory: Inventory }> {
    const product: Product = {
      id: 'prod_' + Date.now(),
      shopId: dto.shopId,
      title: dto.title,
      description: dto.description,
      category: dto.category,
      brand: dto.brand,
      images: dto.images,
      sellingPrice: dto.sellingPrice,
      listPrice: dto.listPrice,
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const inventory: Inventory = {
      productId: product.id,
      shopId: dto.shopId,
      stockQuantity: dto.initialStock,
      reservedQuantity: 0,
      updatedAt: new Date(),
    };

    return { product, inventory };
  }

  async updateInventory(productId: string, dto: UpdateInventoryDto): Promise<Inventory> {
    return {
      productId,
      shopId: 'shop_1',
      stockQuantity: dto.stockQuantity,
      reservedQuantity: 0,
      updatedAt: new Date(),
    };
  }

  async getProductsByShop(shopId: string): Promise<Product[]> {
    return [];
  }
}

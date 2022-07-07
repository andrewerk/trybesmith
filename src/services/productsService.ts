import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import { Product } from '../interfaces/product';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();
    return result;
  }
}
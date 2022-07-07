import connection from '../models/connection';
import ProductModel from '../models/productsModel';
import { AddProduct, Product } from '../interfaces/product';
// import HttpException from '../shared/http.exception';
// import HttpStatusCode from '../shared/http.status.code';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.model.getAll();
    return result;
  }

  public async create(product: AddProduct): Promise<Product> {
    const result = await this.model.create(product);
    return result;
  }
}
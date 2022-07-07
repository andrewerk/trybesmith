import { Request, Response } from 'express';
import HttpStatusCode from '../shared/http.status.code';
import ProductService from '../services/productsService';

class ProductsController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(HttpStatusCode.OK).json(products);
  };
}

export default ProductsController;

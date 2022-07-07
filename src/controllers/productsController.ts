import { Request, Response } from 'express';
import HttpStatusCode from '../shared/http.status.code';
import ProductService from '../services/productsService';

class ProductsController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(HttpStatusCode.OK).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const product = await this.productService.create(req.body);
    res.status(HttpStatusCode.CREATED).json(product);
  };
}

export default ProductsController;

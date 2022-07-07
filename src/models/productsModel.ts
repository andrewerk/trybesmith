import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product, AddProduct } from '../interfaces/product';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products');
    const [rows] = result;
    return rows as Product[]; 
  }

  public async create(product: AddProduct): Promise<Product> {
    const { name, amount } = product;
    const result = await this.connection
      .execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?,?)',
      [name, amount],
    );
    const [row] = result;
    console.log(row);
    const { insertId: id } = row;
    return { id, ...product };
  } 
}

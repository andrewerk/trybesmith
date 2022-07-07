export interface AddProduct {
  name: string,
  amount: string,
}

export interface Product extends AddProduct {
  id: number,
  orderId?: number | null
}

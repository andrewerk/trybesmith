export interface AddOrder {
  productsIds: number[],
}

export interface Order extends AddOrder {
  id?: number,
  userId: number
}
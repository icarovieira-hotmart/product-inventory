export interface Product {
  name: string,
  description: string
  color: string,
  stock: number,
  price: number,
  category_id: number
}

export interface Category {
  id: number
  name: string,
  description: string,
  Products: [Product]
}
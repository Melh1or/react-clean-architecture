import {Product, totalPrice} from 'domain/product'
import {User} from 'domain/user'

export type OrderStatus = 'new' | 'delivery' | 'completed'

export type Order = {
  user: UniqueId
  products: Product[]
  created: DateTimeString
  status: OrderStatus
  total: PriceCents
}

export function createOrder(user: User, products: Product[]): Order {
  return {
    user: user.id,
    products,
    created: new Date().toISOString(),
    status: 'new',
    total: totalPrice(products),
  }
}

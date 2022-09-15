import {User} from 'domain/user'
import {Cart} from 'domain/cart'
import {createOrder} from 'domain/order'
import {NotificationService, OrdersStorageService, PaymentService} from 'application/ports'

const payment: PaymentService = {}
const notifier: NotificationService = {}
const orderStorage: OrdersStorageService = {}

async function orderProducts(user: User, cart: Cart) {
  const order = createOrder(user, cart.products)

  const paid = await payment.tryPay(order.total)

  if (!paid) return notifier.notify('Payment failed')

  const {orders} = orderStorage
  orderStorage.updateOrders([...orders, order])
}

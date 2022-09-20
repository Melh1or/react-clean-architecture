import {User} from 'domain/user'
import {Cart} from 'domain/cart'
import {createOrder} from 'domain/order'

import {usePayment} from 'services/paymentAdpater'
import {useNotifier} from 'services/notificationAdapter'
import {useCartStorage, useOrdersStorage} from 'services/storageAdapter'

export function useOrderProducts() {
  const payment = usePayment()
  const notifier = useNotifier()
  const orderStorage = useOrdersStorage()
  const cartStorage = useCartStorage()

  async function orderProducts(user: User, cart: Cart) {
    const order = createOrder(user, cart.products)

    const paid = await payment.tryPay(order.total)

    if (!paid) return notifier.notify('Payment failed')

    const {orders} = orderStorage
    orderStorage.updateOrders([...orders, order])
    cartStorage.emptyCart()
  }

  return {
    orderProducts,
  }
}


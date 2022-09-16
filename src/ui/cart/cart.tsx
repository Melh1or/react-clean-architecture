import React from 'react'
import {Cart} from 'domain/cart'
import {totalPrice} from 'domain/product'

import {Cookie} from 'ui/cookie'
import styles from './cart.module.css'

export function Cart() {
  const cart: Cart = {}

  return (
    <section>
      <h2>Cart</h2>

      <ul className={styles.list}>
        {cart.products.map((product) => (
          <li key={product.id}>
            <Cookie cookie={product} />
          </li>
        ))}
      </ul>

      <p>Total: {totalPrice(cart.products) / 100} ₽</p>
    </section>
  )
}

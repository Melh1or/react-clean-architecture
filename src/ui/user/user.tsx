import React from 'react'
import {Redirect} from 'react-router'

import {Buy} from 'ui/buy'
import {Cart} from 'ui/cart'
import {Orders} from 'ui/orders'
import {Profile} from 'ui/profile'

export function User() {
  const {user} = {}
  if (!user) return <Redirect to='/auth' />

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  )
}

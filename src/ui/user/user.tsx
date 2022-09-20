import React from 'react'
import {Navigate} from 'react-router'

import {useUserStorage} from 'services/storageAdapter'

import {Buy} from 'ui/buy'
import {Cart} from 'ui/cart'
import {Orders} from 'ui/orders'
import {Profile} from 'ui/profile'

export function User() {
  const { user } = useUserStorage();
  if (!user) return <Navigate to='/auth' />

  return (
    <main>
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  )
}

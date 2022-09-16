import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'

export function Header() {
  const {user} = {}
  const {cart} = {}

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to='/'>
        Co0o0o0o0okie!!!1 🍪
      </Link>

      {!user ? (
        <Link to='/auth'>Log in</Link>
      ) : (
        <Link to='/user'>
          {user.name} ({cart.products.length})
        </Link>
      )}
    </header>
  )
}

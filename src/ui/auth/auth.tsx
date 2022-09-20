import React from 'react'
import {Navigate} from 'react-router-dom'

import {useAuthenticate} from 'application/authenticate'

import {UserName} from 'domain/user'
import styles from './auth.module.scss'

export function Auth() {
  const [name, setName] = React.useState<UserName>('')
  const [email, setEmail] = React.useState<Email>('')
  const [loading, setLoading] = React.useState(false)

  const {user, authenticate} = useAuthenticate()
  if (!!user) return <Navigate to='/' />

  async function handleSubmit(e: React.FormEvent) {
    setLoading(true)
    e.preventDefault()

    await authenticate(name, email)
    setLoading(false)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label>
        <span>Name</span>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
      </label>
      <label>
        <span>Email</span>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <button type='submit' disabled={loading}>
        {loading ? 'Trying to login...' : 'Login'}
      </button>
    </form>
  )
}

import {Product} from 'domain/product'
import {Cookie} from 'ui/cookie'
import {useStore} from 'services/store'
import styles from './front.module.scss'

export function Front() {
  const {cookies} = useStore()

  return (
    <main>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  )
}

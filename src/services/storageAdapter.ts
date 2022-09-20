import {useStore} from 'services/store'
import {CartStorageService, OrdersStorageService, UserStorageService} from 'application/ports'

export function useUserStorage(): UserStorageService {
  return useStore()
}

export function useCartStorage(): CartStorageService {
  return useStore()
}

export function useOrdersStorage(): OrdersStorageService {
  return useStore()
}

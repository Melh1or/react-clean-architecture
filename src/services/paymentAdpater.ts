import {fakeApi} from 'services/api'
import {PaymentService} from 'application/ports'

export function usePayment(): PaymentService {
  return {
    tryPay(amount: PriceCents): Promise<boolean> {
      return fakeApi(true)
    }
  }
}

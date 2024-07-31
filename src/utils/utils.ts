import { IProduct } from '@/types/types'

export function formatDate(date: string, format: string) {
  const sm = { day: '2-digit', month: '2-digit' }
  const md = { day: '2-digit', month: 'short', year: 'numeric' }

  const currentFormat = format === 'sm' ? sm : md

  return new Date(date)
    .toLocaleDateString('en-GB', currentFormat as Intl.DateTimeFormatOptions)
    .replace(/ /g, ' / ')
    .replace(',', '')
}

export const updateDateTime = (
  currentDate: (date: string) => void,
  currentTime: (time: string) => void
) => {
  const now = new Date()

  const dateFormatter = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  currentDate(dateFormatter.format(now))

  const timeFormatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })

  currentTime(timeFormatter.format(now))
}

export function convertMoney(amount: number) {
  const exchangeRate = 41.05
  return (amount * exchangeRate).toFixed(2)
}

export function totalAmount(products: IProduct[]) {
  return products.reduce(
    (total: number, product: IProduct) => total + product.price,
    0
  )
}

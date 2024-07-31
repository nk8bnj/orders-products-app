export interface IProduct {
  id: number
  name: string
  sn: string
  img: string
  type: string
  specification: string
  isFree: boolean
  guarantee: {
    start: string
    end: string
  }
  price: number
  order: number
  date: string
}

export interface IOrder {
  id: number
  title: string
  date: string
  description: string
}

export enum ProductType {
  All = 'all',
  Laptop = 'laptop',
  Monitor = 'monitor',
  PC = 'personal computer',
}

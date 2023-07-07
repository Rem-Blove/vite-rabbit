export interface OrderType {
  code: string
  message: string
  result: {
    items: []
    counts: number
  }
}

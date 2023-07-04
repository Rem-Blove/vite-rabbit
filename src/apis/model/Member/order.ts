export interface Order {
  countdown: number
  id: string
  createTime: string
  orderState: number
  payMoney: number
  postFee: number
  skus: Array<{
    id: string
    image: string
    name: string
    attrsText: string
    realPay: number
    quantity: number
  }>
}

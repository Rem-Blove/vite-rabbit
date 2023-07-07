export interface cAType {
  goods: Array<{
    id: number
    picture: string
    name: string
    attrsText: string
    price: number
    totalPrice: number
    totalPayPrice: number
  }>
  summary: {
    goodsCount: number
    totalPrice: number
    postFee: number
    totalPayPrice: number
  }
  userAddresses: Array<{
    id: number
    receiver: string
    contact: string
    fullLocation: string
    address: string
    isDefault: number
  }>
}

export interface cIType {
  userAddresses: Array<{
    id: number
    isDefault: number
    receiver: string
    contact: string
    fullLocation: string
    address: string
  }>
  goods: []
}

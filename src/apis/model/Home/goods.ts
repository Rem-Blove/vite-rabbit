// layout Home goods ts数据类型
export interface DoodsTsType {
  id: string
  name: string
  picture: string
  saleInfo: string
  children: []
  goods: goods[]
}
export interface goods {
  id: string
  picture: string
  name: string
  desc: string
  price: string
}

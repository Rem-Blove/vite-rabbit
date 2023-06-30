// Layout SubCategory goodsList ts数据类型
export interface subGoodTsType {
  id?: string
  counts: number
  pageSize: number
  pages: number
  page: number
  items: ItemsItem[]
}
export interface ItemsItem {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  orderNum: number
}

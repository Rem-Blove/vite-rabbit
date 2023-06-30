// Layout SubCategory  sub ts数据类型
export interface subTsType {
  id: string
  name: string
  picture: string
  parentId: string
  parentName: string
  goods: GoodsItem[]
  categories: CategoriesItem[]
  brands: any[]
  saleProperties: any[]
  value?: any
}

export interface CategoriesItem {
  id: string
  name: string
  layer: number
  parent: string
}
export interface GoodsItem {
  id: string
  name: string
  desc: string
  price: string
  picture: string
  orderNum: number
}

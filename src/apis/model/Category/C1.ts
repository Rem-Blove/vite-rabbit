// Layout category ts 数据类型
export interface ResultObject {
  /**
   * 业务状态码
   */
  code: string
  /**
   * 响应消息
   */
  msg: string
  /**
   * 响应结果
   */
  result: Result
}

/**
* 响应结果
*/
export interface Result {
  /**
   * 下属分类数组
   */
  children: Child[]
  /**
   * 一级分类id
   */
  id: string
  /**
   * 一级分类名字
   */
  name: string
  /**
   * 一级分类图片
   */
  picture: null

  items: []
}

export interface Child {
  /**
   * 推荐品牌
   */
  brands: null
  /**
   * 分类集合
   */
  categories: null
  /**
   * 二级分类商品
   */
  goods: Good[]
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名字
   */
  name: string
  /**
   * 二级分类父级分类id
   */
  parentId: null
  /**
   * 二级分类父级分类名字
   */
  parentName: null
  /**
   * 二级分类图片
   */
  picture: string
  /**
   * 销售属性
   */
  saleProperties: null
}

export interface Good {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣
   */
  discount: null
  /**
   * 商品id
   */
  id: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品订单数(销量)
   */
  orderNum: number
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
}

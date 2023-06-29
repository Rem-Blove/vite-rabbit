// Layout Home components HomeCategory
// 全部分类（包含商品）Ts 数据类型
export interface AllTsType {
  /**
   * 子分类数组
   */
  children: Child[]
  /**
   * 分类下属商品
   */
  goods: Good[]
  /**
   * 分类id
   */
  id: string
  /**
   * 分类名字
   */
  name: string
  /**
   * 分类图片
   */
  picture: string
}

export interface Child {
  /**
   * 三级分类数组，三级分类数组(暂无)
   */
  children: null
  /**
   * 二级级分类下属商品数组，二级分类商品数组(暂无)
   */
  goods: null
  /**
   * 二级分类id
   */
  id: string
  /**
   * 二级分类名字
   */
  name: string
  /**
   * 二级分类图片
   */
  picture: string
}

export interface Good {
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品折扣，如为null时，即无折扣
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
   * 商品销量
   */
  orderNum: null
  /**
   * 商品图片
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
}

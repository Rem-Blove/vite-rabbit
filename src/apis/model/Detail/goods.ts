
export interface DetailTsType {
  /**
   * 商品品牌
   */
  brand: Brand
  /**
   * 商品所属分类，多级以数组形式体现，如[一级分类，二级分类，三级分类]
   */
  categories: Category[]
  /**
   * 商品收藏总数
   */
  collectCount: number
  /**
   * 商品评论总数
   */
  commentCount: number
  /**
   * 商品描述
   */
  desc: string
  /**
   * 商品详情
   */
  details: Details
  /**
   * 商品折扣
   */
  discount: number
  /**
   * 商品评价信息
   */
  evaluationInfo: EvaluationInfo
  /**
   * 商品24小时热销列表
   */
  hotByDay: HotByDay[]
  /**
   * 商品id
   */
  id: string
  /**
   * 商品库存数
   */
  inventory: number
  /**
   * 商品是否收藏，用户未登录无值
   */
  isCollect: null
  /**
   * 商品是否为预售商品
   */
  isPreSale: boolean
  /**
   * 商品主图集合
   */
  mainPictures: string[]
  /**
   * 商品主图视频合集
   */
  mainVideos: string[]
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品原价
   */
  oldPrice: string
  /**
   * 商品价格
   */
  price: string
  /**
   * 商品推荐集合，仅APP有此数据
   */
  recommends: null
  /**
   * 商品销量
   */
  salesCount: number
  /**
   * 商品同类商品集合
   */
  similarProducts: SimilarProduct[]
  /**
   * 商品sku集合
   */
  skus: Skus[]
  /**
   * 商品可选规格集合备注：规格集合一定要和skus集合下的specs 顺序保持一致
   */
  specs: ResultSpec[]
  /**
   * 商品spu编码
   */
  spuCode: string
  /**
   * 商品用户地址列表，用户未登录时该字段为空
   */
  userAddresses: null
  /**
   * 商品主图视频比例，视频比例,1为1:1/16:9，2为3:4
   */
  videoScale: number
}

/**
 * 商品品牌
 */
export interface Brand {
  /**
   * 品牌描述
   */
  desc: null
  /**
   * 品牌id
   */
  id: string
  /**
   * 品牌logo图片地址
   */
  logo: string
  /**
   * 品牌名字
   */
  name: string
  /**
   * 品牌英文名字
   */
  nameEn: string
  /**
   * 品牌图片地址
   */
  picture: string
  /**
   * 品牌产地
   */
  place: null
  /**
   * 品牌类型
   */
  type: null
}

export interface Category {
  /**
   * 分类id
   */
  id: string
  /**
   * 分类所属层数
   */
  layer: number
  /**
   * 分类名字
   */
  name: string
  /**
   * 分类-父级分类对象
   */
  parent: null | Parent
}

export interface Parent {
  /**
   * 父级分类id
   */
  id: string
  /**
   * 父级所属层数
   */
  layer: number
  /**
   * 父级分类名字
   */
  name: string
  /**
   * 父级的父级，如果有的话
   */
  parent: null
}

/**
 * 商品详情
 */
export interface Details {
  /**
   * 商品详情图片集合地址
   */
  pictures: string[]
  /**
   * 商品属性集合
   */
  properties: Property[]
}

export interface Property {
  /**
   * 商品属性名字
   */
  name: string
  /**
   * 商品属性值
   */
  value: string
}

/**
 * 商品评价信息
 */
export interface EvaluationInfo {
  /**
   * 评价的内容
   */
  content: string
  /**
   * 评价创建时间
   */
  createTime: string
  /**
   * 商品id
   */
  id: string
  /**
   * 评价的用户信息
   */
  member: null
  /**
   * 客服回复
   */
  officialReply: null
  /**
   * 评价的订单信息
   */
  orderInfo: null
  /**
   * 评价的图片，带图评价
   */
  pictures: null
  /**
   * 评价点赞数
   */
  praiseCount: number
  /**
   * 评价的好评率
   */
  praisePercent: number
  /**
   * 评价的商品评分，取值范围0-5
   */
  score: number
  /**
   * 评价的标记
   */
  tags: null
}

export interface HotByDay {
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
   * 商品总订单数(销量)
   */
  orderNum: number
  /**
   * 商品图片地址
   */
  picture: string
  /**
   * 商品价格
   */
  price: string
}

export interface SimilarProduct {
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
   * 商品名称
   */
  name: string
  /**
   * 商品总订单数(销量)
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

export interface Skus {
  /**
   * sku的id
   */
  id: string
  /**
   * 当前规格库存
   */
  inventory: number
  /**
   * 当前规格原价
   */
  oldPrice: string
  /**
   * 当前规格价格
   */
  price: string
  /**
   * sku的编码
   */
  skuCode: string
  /**
   * 规格集合(和详情中specs的顺序一定要保持一致)
   */
  specs: SkusSpec[]
}

export interface SkusSpec {
  /**
   * 规格名字
   */
  name: string
  /**
   * 可选值名称
   */
  valueName: string
}

export interface ResultSpec {
  /**
   * 规格id
   */
  id: string
  /**
   * 规格名字
   */
  name: string
  /**
   * 规格可选值集合
   */
  values: Value[]
}

export interface Value {
  /**
   * 可选值备注
   */
  desc: string
  /**
   * 可选值名称
   */
  name: string
  /**
   * 可选值图片地址
   */
  picture: null | string
}

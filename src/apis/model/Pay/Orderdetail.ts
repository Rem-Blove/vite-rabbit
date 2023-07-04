export interface OrderdetailTs {
  /**
   * 业务状态码，1成功, 其他失败
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
   * 预计到货时间
   */
  arrivalEstimatedTime: null
  /**
   * 订单收货人-城市编码
   */
  cityCode: string
  /**
   * 订单交易关闭时间
   */
  closeTime: string
  /**
   * 订单发货时间
   */
  consignTime: null
  /**
   * 订单倒计时，剩余的秒数-1表示已经超时, 正数表示倒计时未结束
   */
  countdown: number
  /**
   * 订单收货人-地区编码
   */
  countyCode: string
  /**
   * 订单创建时间
   */
  createTime: string
  /**
   * 订单配送类型，配送时间类型，1为不限，2为工作日，3为双休或假日
   */
  deliveryTimeType: number
  /**
   * 订单交易完成时间
   */
  endTime: null
  /**
   * 订单完成评价时间
   */
  evaluationTime: null
  /**
   * 订单id
   */
  id: string
  /**
   * 订单状态，1为待付款, 2为待发货, 3为待收货, 4为待评价, 5为已完成, 6为已取消
   */
  orderState: number
  /**
   * 订单支付渠道，1支付宝, 2微信
   */
  payChannel: number
  /**
   * 订单付款截止时间，剩余的秒数, 前台转换成分钟: 秒数
   */
  payLatestTime: string
  /**
   * 订单实付金额
   */
  payMoney: number
  /**
   * 订单状态，1为待付款、2为待发货、3为待收货、4为待评价、5为已完成、6为已取消
   */
  payState: number
  /**
   * 订单支付时间
   */
  payTime: null
  /**
   * 订单支付方式，1为在线支付, 2为货到付款
   */
  payType: number
  /**
   * 订单邮费
   */
  postFee: number
  /**
   * 订单收货人-省份编码
   */
  provinceCode: string
  /**
   * 订单收货人-详细地址
   */
  receiverAddress: string
  /**
   * 订单收货人
   */
  receiverContact: string
  /**
   * 订单收货人手机号
   */
  receiverMobile: string
  /**
   * 订单商品sku的id集合
   */
  skus: Skus[]
  /**
   * 订单金额合计
   */
  totalMoney: number
  /**
   * 订单数量合计
   */
  totalNum: number
}

export interface Skus {
  /**
   * 商品属性文字，属性文字，例如“颜色:瓷白色 尺寸：8寸”
   */
  attrsText: string
  /**
   * 商品当前单价
   */
  curPrice: number
  /**
   * 商品id
   */
  id: string
  /**
   * 商品图片地址
   */
  image: string
  /**
   * 商品名字
   */
  name: string
  /**
   * 商品属性集合
   */
  properties: Property[]
  /**
   * 商品数量
   */
  quantity: number
  /**
   * 商品实付金额
   */
  realPay: number
  /**
   * 商品spu的id
   */
  spuId: string
  /**
   * 商品金额合计
   */
  totalMoney: null
}

export interface Property {
  /**
   * 属性名称，如 颜色
   */
  propertyMainName: string
  /**
   * 属性值名称，如 黑色
   */
  propertyValueName: string
}

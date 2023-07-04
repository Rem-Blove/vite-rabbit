export interface PayTs {
  code: string
  result: any
  code: string
  code: string
  /**
   * 收货地址id
   */
  addressId: string
  /**
   * 买家备注留言，默认为空字符串即可
   */
  buyerMessage: string
  /**
   * 配送时间，默认为1即可
   */
  deliveryTimeType: number
  /**
   * 订单内商品集合，需要自己携带给后台
   */
  goods: Good[]
  /**
   * 支付渠道，默认为1即可(支付宝支付-此项目只支持支付宝)
   */
  payChannel: number
  /**
   * 支付方式，默认为1即可(在线支付)
   */
  payType: number
}

export interface Good {
  /**
   * 商品数量
   */
  count: number
  /**
   * 商品库存量单位id
   */
  skuId: string
}

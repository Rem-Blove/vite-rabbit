export interface GetAddress {
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
  result: Result[]
}

export interface Result {
  /**
   * 收货人-详细地址
   */
  address: string
  /**
   * 收货人-地址标签，如果有多个, 是英文逗号分割的
   */
  addressTags: null | string
  /**
   * 收货人-城市编码
   */
  cityCode: string
  /**
   * 收货人-联系方式
   */
  contact: string
  /**
   * 收货人-地区编码
   */
  countyCode: string
  /**
   * 收货人-完整地址
   */
  fullLocation: string
  /**
   * 收货地址id
   */
  id: string
  /**
   * 收货地址是否默认，0是, 1不是
   */
  isDefault: number
  /**
   * 收货人-邮政编码
   */
  postalCode: null | string
  /**
   * 收货人-省份编码
   */
  provinceCode: string
  /**
   * 收货人-姓名
   */
  receiver: string
}

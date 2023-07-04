export interface Address {
  code: string
  /**
   * 收货人-详细地址
   */
  address: string
  /**
   * 收货人-地址标签，如果有多个, 以英文逗号分割
   */
  addressTags: string
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
   * 收货地址是否默认，0是, 1不是
   */
  isDefault: number
  /**
   * 收货人-邮政编码
   */
  postalCode: string
  /**
   * 收货人-省份编码
   */
  provinceCode: string
  /**
   * 收货人-姓名
   */
  receiver: string
}

export interface CheckoutTs {
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
  result: any
}

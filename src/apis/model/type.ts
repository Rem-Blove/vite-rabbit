// 公共的ts数据类型
export interface Result {
  code: string
  message: string
  // eslint-disable-next-line @typescript-eslint/ban-types
  result: [] | {}
}

// 公共的ts数据类型
export interface Result {
  code: string
  message: string
  result: []
}
export interface ResultObject {
  code: string
  message: string
  result: {
    mainPictures?: string[]
  }
}

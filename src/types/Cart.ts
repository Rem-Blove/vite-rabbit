export interface lCLType {
  length: number
  find: (item: any) => { count: number } | undefined
  findIndex: (item: any) => number
  splice: (index: number, count: number) => void
  push: (item: any) => void
  // eslint-disable-next-line @typescript-eslint/ban-types
  map: (item: any) => Array<{}>
}

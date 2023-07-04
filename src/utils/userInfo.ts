// 名称
export const setUserName = (name: string): any => {
  localStorage.setItem('userName', name)
}
export const getUserName = (): any => {
  return localStorage.getItem('userName')
}
export const removeUserName = (): any => {
  localStorage.removeItem('userName')
}
// 头像
export const setAvatar = (avatar: string): any => {
  localStorage.setItem('xtx-avatar', avatar)
}
export const getAvatar = (): any => {
  return localStorage.getItem('xtx-avatar')
}
export const removeAvatar = (): any => {
  localStorage.removeItem('xtx-avatar')
}

// 名称
export const setUserName = (name: string): void => {
  localStorage.setItem('userName', name)
}
export const getUserName = (): string => {
  return localStorage.getItem('userName') ?? ''
}
export const removeUserName = (): void => {
  localStorage.removeItem('userName')
}
// 头像
export const setAvatar = (avatar: string): void => {
  localStorage.setItem('xtx-avatar', avatar)
}
export const getAvatar = (): string => {
  return localStorage.getItem('xtx-avatar') ?? ''
}
export const removeAvatar = (): void => {
  localStorage.removeItem('xtx-avatar')
}

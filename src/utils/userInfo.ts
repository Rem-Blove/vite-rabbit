export const setUserName = (name: string): any => {
  localStorage.setItem('userName', name)
}
export const getUserName = (): any => {
  return localStorage.getItem('userName')
}
export const removeUserName = (): any => {
  localStorage.removeItem('userName')
}

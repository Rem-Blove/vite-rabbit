export const setToken = (token: string): any => {
  localStorage.setItem('token', token)
}

export const getToken = (): any => {
  return localStorage.getItem('token')
}
export const removeToken = (): any => {
  localStorage.removeItem('token')
}

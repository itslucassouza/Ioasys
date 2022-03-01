export const setAccessToken = (accessToken: string) => {
  localStorage.setItem('books-accesToken', accessToken)
}

export const setRefreshToken = (refreshToken: string) => {
  localStorage.setItem('books-refreshToken', refreshToken)
}

import user from '@/api/user.api.js'

export const apiCreate = axios => ({
  userApi: user(axios)
})
import { apiCreate } from '@/api/main.js'

export default (ctx, inject) => {
  inject('api', apiCreate(ctx.$axios))
}

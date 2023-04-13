export const state = () => ({
  user:{}
  })
  
  export const actions = {

    async login({commit}){
      let data = await this.$api.userApi.loginUser()
    
      this.$axios.setHeader('X-User-Token', data.token)
      let user = await this.$api.userApi.getUser(data.user.id)
    
      commit('setUser', user)        
    },

   async updateUser({},{id, body}){
    console.log(id)
      let data = await this.$api.userApi.updateDataUser(id, body)
      
    }
  }

  export const mutations = {
    setUser(state, user){
      state.user = user
    }
  }
  
  export const getters = {
    getUser(state){
      return state.user;
    },
  }  
  
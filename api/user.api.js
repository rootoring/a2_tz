
export default axios => ({

  async getUser (id) { 
    let { data } = await axios.get(`user/${id}`);
    return data   
  },
  
  async loginUser (){
    let { data }= await axios.post('/login', {login:'9898702982',password:'4652276441'})
    return data
  },

  async updateDataUser(id, body){
    let { data } = await axios.put(`/user/${id}`, body)
    return data
  }

})
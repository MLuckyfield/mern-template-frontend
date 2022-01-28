import lib from 'axios';

export const axios = lib.create({})
axios.interceptors.request.use(
  config => {
    config.headers['Authorization']=`Token ${localStorage.getItem('token')}`
    return config
  },
  error=>{return Promise.reject(error)}
)
// export const setToken = (token)=>{
//   if(token){
//     axios.defaults.headers.common['Authorization']=`Bearer ${token}`
//     console.log(axios.defaults.headers.common['Authorization'])
//   }else{
//     delete axios.defaults.headers.common['Authorization']
//   }
// }

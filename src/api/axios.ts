import Axios from "axios";
//axios的封装
interface User {
  username:string|number
  password:any
}

export function login(url: string,user:User){

  // @ts-ignore
  return Axios.post(url,user,
  ).then((res)=>{
    return res.data
  }).catch(error=>{
    return error
  })
}
export function Regist(url:string,user:User){
  return Axios.post(url,user).then(res=>{
    return res.data
  })
}

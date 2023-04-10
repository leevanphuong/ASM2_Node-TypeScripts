import {User} from './instance'
import { useNavigate } from 'react-router-dom'
import { Iuser } from '../interface/user'
import { message } from 'antd'
const getalluser = ()=>{
    return User.get('/signup')
}
const adduser =(userItem: Iuser)=>{
    return User.post('/signup', userItem)
    .then(()=>{
        message.success("Đăng ký thành công")
    })
    .catch((error) =>{
        if(error.response && error.response.status === 400){
            const errorMessage = error.response.data.message;
            alert(errorMessage)
        }else{
            console.log("lỗi không xác định")
        }
    })
}
// const getoneUser=(id: Number|string)=>{
//     return User.get('/signup/'+id)
// }
const login =(useritem: any)=>{
    return User.post('/signin', useritem)
    .catch((error) =>{
        if(error.response && error.response.status === 400){
            const errorMessage = error.response.data.message;
            alert(errorMessage)
        }else{
            console.log("lỗi không xác định")
        }
    })
}

export {getalluser,adduser,login}
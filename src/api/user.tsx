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
        message.success("Đăng ký thành công") // neu dang ky thanh cong thi hiện message 
    })
    .catch((error) =>{
        if(error.response && error.response.status === 400){ // new Response co loi thi sẽ hiện thong báo lỗi 
            const errorMessage = error.response.data.message;
            message.error(errorMessage) // trả về lỗi 
        }else{
            message.error("lỗi không xác định")
        }
    })
}

const login =(useritem: any)=>{
    return User.post('/signin', useritem)
    .catch((error) =>{
        if(error.response && error.response.status === 400){ // new Response co loi thi sẽ hiện thong báo lỗi 
            const errorMessage = error.response.data.message; // trả về lỗi 
            message.error(errorMessage)
        }else{
            message.error("lỗi không xác định")
        }
    })
}

export {getalluser,adduser,login}
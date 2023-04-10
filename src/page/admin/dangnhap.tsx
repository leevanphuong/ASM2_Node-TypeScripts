import React from 'react'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { login } from '../../api/user'
const Dangnhap = () => {
    const naviga = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onhandleSubmit = async (data: any) => {
        const { data: username } = await login(data)
        localStorage.setItem('user', JSON.stringify(username)) 

        const {user}= JSON.parse(localStorage.getItem('user')!) // lay user tu localstorage 
        if(user.role=='admin'){  //neu la admin thi render vao trang admin
            message.success('Chào mừng quay trở lại'+ user.name)
            naviga('/admin')
        }
        if(user.role=='member'){ //neu la member thi render vao homepage
            message.success("Chào mừng quay chở lại"+user.name)
            naviga('/')
        }
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit(onhandleSubmit)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email')} placeholder="Enter email" required/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" {...register('password')} placeholder="Password"required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Dangnhap
import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {message  } from 'antd';


const updatecate = (props:any) => {
    const {id}=useParams()
    const naviga =useNavigate()
    const {register, handleSubmit, reset}= useForm()
    useEffect(()=>{
      const resetCate = props.cate.find((item:any)=> String(item._id)== String(id))
      reset(resetCate)
    },[props])
    const submit= (data:any)=>{
      props.onUpdate(data) // cập nhập lại phần danh muc 
      if(data){
        setTimeout(() => {
          message.success("Cập nhập thành công")
        }, 1500);
      }
      naviga('/admin/danhmuc')
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label htmlFor="">tên sản phẩm</label>
          <input type="text" className="form-control"  {...register("name")} />
        </div>
        <br />
            <button className='btn btn-primary' type='submit'>Cap nhap</button>
        </form>
    </div>
  )
}

export default updatecate
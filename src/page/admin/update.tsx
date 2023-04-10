import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { Iproduct } from '../../interface/Iproduct'
import { message } from 'antd'
const UpdateProduct = (props:any) => {
  const { id } = useParams()
  const naviga = useNavigate()
  const { register, handleSubmit, reset } = useForm()
  useEffect(() => {
    const ResetPro = props.product.find((item: Iproduct) => String(item._id) == String(id))
    reset(ResetPro)
  }, [props])
  const onhandleSubmit = (data:any) => {
    props.onUpdate(data) // cập nhập lại du diệu của sản phẩm 
    if (data) {
      setTimeout(() => {
        message.success("Cập nhập thành công")
      }, 1500);
    }
    naviga('/admin')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">tên sản phẩm</label>
          <input type="text" className="form-control"  {...register("name")} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="number" className="form-control"  {...register("price")} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">tên sản phẩm</label>
          <input type="text" className="form-control"  {...register("image")} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">tên sản phẩm</label>
          <input type="text" className="form-control" {...register("desc")} />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UpdateProduct
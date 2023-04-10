import React from 'react'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Iproduct } from '../interface/Iproduct'
import { Card } from 'antd';

interface Iprops{
  product:Iproduct[]
}
const ProductDetail = (props:Iprops) => {
  const { id } = useParams()
  const [data, setData] = useState<Iproduct[]>([]) 
  const [details, setdetails] = useState<any>()
  const [listCate, setListCate] = useState<Iproduct[]>([])
  
  useEffect(() => {
    setData(props.product) // lấy tất cả sản phẩm 
  }, [props])

  useEffect(() => {
   const detailproduct=props.product.find((item)=>item._id==id) // lấy 1 sản phâm theo id
   setdetails(detailproduct)
   console.log(details)
  }, [props])

  useEffect(()=>{
    if (details) {
      const filteredData = data.filter((item: Iproduct) => item.categoryId === details.categoryId) // kiểm tra xem id của sản phẩm này có === id sản phẩm khác không
      setListCate(filteredData) // lưu trữ tất cả các sản phẩm có đủ điều kiện trên 
    }
  }, [data, details, id])
  return (
    <div key={details?._id}>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={details?.image} alt="..." /></div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{details?.name}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">$45.00</span>
                <span style={{ paddingLeft: '50px', color: 'red' }}>{details?.price}</span>
              </div>
              <p className="lead">{details?.desc}</p>
  
              <div className="d-flex">
                <input className="form-control text-center me-3" id="inputQuantity" type="number" style={{ maxWidth: "5rem" }} />
                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-light">
      <div className="col-9 container">
        <h3>Sản phẩm tương tự</h3>
          <div className="row">
            {
              listCate.map((item:any, index) => {
                return <div className='col-3 mt-5' key={index + 1}>
                  <Card>
                    <a href={"/product/" + item._id}><img className='card-img-top' src={item.image} /></a>
                    <h5 className='card-text'>{item.name}</h5>
                    <p>Giá cũ: {item.price} <b style={{ paddingLeft: '10px', color: 'red' }}>{item.price}</b> </p>
                    <button type="button" className="btn border">Mua hàng</button>
                  </Card>
                </div>
              })
            }       
    </div>
    </div>
      </section>
    </div>
  )
}

export default ProductDetail
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card } from 'antd';

import { Iproduct } from '../interface/Iproduct'
import { Icate } from '../interface/category'

interface Iprops{
product:Iproduct[]
cate:Icate[]
}
const categorydetails = (props:Iprops) => {
  const { id } = useParams()
  const [listCate, setListCate] = useState<Iproduct[]>([])
  const [data, setData] = useState<Iproduct[]>([]) 
  const [categorys, setCategorys] = useState<Icate>()

  useEffect(() => {
    setData(props.product)
  }, [props])

  useEffect(() => {
    const newCate = props.cate.find((item: Icate) => item._id === id)
    setCategorys(newCate) 
  }, [props])

  useEffect(() => {
    if (categorys) {
      const filteredData = data.filter((item: Iproduct) => item.categoryId === categorys._id)
      setListCate(filteredData)
    }
  }, [data, categorys, id])

  console.log(listCate)
   
  return (
    <div>
      
      <div className="col-9 container">
          <h3>{categorys?.name}</h3>
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
  </div>
 )
}

export default categorydetails
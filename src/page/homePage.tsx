import { Iproduct } from '../interface/Iproduct';
import { useState, useEffect } from 'react'
import { Card } from 'antd';

interface Iprops {
  product: Iproduct[],
  cate:any
}
const homePage = (props: Iprops) => {
  const [data, setdata] = useState<Iproduct[]>([])
  useEffect(() => {
    setdata(props.product)  // lấy tất cả sản phẩm 
  }, [props])

  const [cate, setcate] = useState([])
  useEffect(() => {
    setcate(props.cate) // lấy tất cả danh muc
  }, [props])
  return (
    <div style={{ marginTop: 20 }} className='container'>
      <div className="row">
        <div className="col-3">
          <h3>Danh mục</h3>
          <ul className="list-group">
             {
              cate.map((item:any, index)=>{
                return <li className='list-group-item' key={index+1}><a href={"/categori/"+item._id}>{item.name}</a></li>
              })
             }
          </ul>
        </div>
        <div className="col-9 container">
          <h3>Sản phẩm nổi bật</h3>
          <div className="row">
            {
              data.map((item:any, index) => {
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
    </div>
  )
}

export default homePage
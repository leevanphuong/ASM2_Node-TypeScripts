import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addProduct, getAll, remove, update } from './api/products'
import HomePage from './page/homePage'
import Website from './layouts/website'
import ProductDetail from './page/ProductDetail'
import Dashboarh from './page/admin/dashboarh'
import './style.css'
import { getalluser, adduser, login } from './api/user'
import { getAllCate, removeCate,updateCate,addProductCate } from './api/categori'
import AddProduct from './page/admin/addProduct'
import UpdateProduct from './page/admin/update'
import Admin from './layouts/admin'
import Danhmuc from './page/admin/categori/danhmuc'
import Updatecate from './page/admin/categori/updatecate'
import AddCategory from './page/admin/categori/addcate'
import Showuer from './page/admin/taikhoan/showuer'
import Login from './page/dangky'
import Dangnhap from './page/admin/dangnhap'
import Categorydetails from './page/categorydetails'
import { Iproduct } from './interface/Iproduct'


function App() {
  const [products, setproduct] = useState<Iproduct[]>([])
  useEffect(() => {
    getAll().then(({ data }) => setproduct(data))
  }, [])
  const removeItem = (id:number|string) => {
    remove(id).then(() => setproduct(products.filter((item) => item._id != id)))
  }
  const additem = async (product: Iproduct) => {
    addProduct(product).then(() => setproduct([...products, product]))
  }
  const updateitem =(product: any)=>{
    update(product)?.then(()=>setproduct(products.map((item)=>{
      if(item._id==product._id){
        return product
      }
      else{
        return item
      }
    })))
  }
  const [cates,setcate]= useState([])
  useEffect(()=>{
    getAllCate().then(({data})=> setcate(data))
  },[])
  const addCate = async (categori: any) => {
    addProductCate(categori).then(() => setcate([...cates, categori]))
  }
  const deleteCate =(id: number|string)=>{
    removeCate(id).then(()=> setcate(cates.filter((item:any)=> item._id !== id)))
  }
  const CategoryUpdate =(categori: any)=>{
    updateCate(categori)
  }
  /*User */
  const [user, setUser]= useState<any>([])
  useEffect(()=>{
    getalluser().then(({data})=> setUser(data))
  },[])
  const addusers =(userItem:any)=>{
    adduser(userItem).then(()=>setUser([...user, userItem]))
  }
  return (

    <div className="App">
      <Routes>
        <Route path='/' element={<Website/>}>
          <Route index element={<HomePage cate={cates} product={products} />} />
          <Route path='product/:id' element={<ProductDetail product={products} />} />
          <Route path='dangky' element={<Login onAddUser={addusers} />} />
          <Route path='categori/:id' element={<Categorydetails product={products} cate={cates}/>} />
          <Route path='dangnhap' element={< Dangnhap />}/>
        </Route>
        <Route path='/admin' element={<Admin/>}>
          <Route index element={<Dashboarh product={products} onRemove={removeItem} />} />
          <Route path='add' element={<AddProduct onAdd={additem}  />} />
          <Route path='addcate' element={<AddCategory onAdd={addCate}  />} />
          <Route path='update/:id' element={<UpdateProduct product={products} onUpdate={updateitem}/>} />
          <Route path='danhmuc' element={<Danhmuc cate={cates} onRemove={deleteCate}/>}/>
          <Route path='danhmuc/:id' element={<Updatecate cate={cates}  onUpdate={CategoryUpdate}/>}/>
          <Route path='taikhoan' element={< Showuer user={user}/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App

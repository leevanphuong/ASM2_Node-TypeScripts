import { Iproduct } from "../interface/Iproduct";
import { Product } from "./instance";

export const getAll =()=>{
    return Product.get('/products')
}
export const getOne=(id: number|string)=>{
    return Product.get('/products/'+id)
}
export const remove =(id: number|string)=>{
    const {accessToken}= JSON.parse(localStorage.getItem('user')!)
    const user =JSON.parse(localStorage.getItem('user')!)
    if(user){
        return Product.delete('/products/'+id,{
            headers:{
                Authorization: `Bearer ${accessToken}`
            },
            
        })
    }
}
export const update =(product: Iproduct)=>{
    const {accessToken}= JSON.parse(localStorage.getItem('user')!)
    const user =JSON.parse(localStorage.getItem('user')!)
    if(user){
    return Product.put('/products/'+product._id, product,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
}
}
export const addProduct =(product: Iproduct)=>{
    const {accessToken}= JSON.parse(localStorage.getItem('user')!)
    const user =JSON.parse(localStorage.getItem('user')!)
    if(user){
    return Product.post('/products', product,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        }
    })
}
}
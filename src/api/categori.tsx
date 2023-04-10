import { Cate } from "./instance";
import { Icate } from "../interface/category";
export const getAllCate =()=>{
    return Cate.get('/categori')
}
export const getOneCate=(id: any)=>{
    return Cate.get('/categori/'+id)
}
export const removeCate =(id: number|string)=>{
    const {accessToken}= JSON.parse(localStorage.getItem('user')!) // neu co accessToken thì cho thực hiện quyền 
    return Cate.delete('/categori/'+id,{
        headers:{
            Authorization: `Bearer ${accessToken}` 
        },
        
    })
}
export const updateCate =(categori: Icate)=>{
    const {accessToken}= JSON.parse(localStorage.getItem('user')!)
    return Cate.put('/categori/'+categori._id, categori,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        },
        
    })
}
export const addProductCate =(categori: Icate)=>{
    const {accessToken}= JSON.parse(localStorage.getItem('user')!)
    return Cate.post('/categori', categori,{
        headers:{
            Authorization: `Bearer ${accessToken}`
        },
        
    })
}
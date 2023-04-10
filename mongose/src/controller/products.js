import Product from "../model/product";
import Joi from "joi"
const checkitem = Joi.object({
    name: Joi.string().required("Nhập tên sản phẩm").empty(),
    price: Joi.number().required("Nhập giá sản phẩm").empty(),
    image: Joi.string().required("Nhập hình ảnh sản phẩm").empty(),
    desc: Joi.string().empty(),
    categoryId: Joi.string().required("Nhap id danh muc").empty()

})

export const getAll= async(req,res)=>{
    try {
        const data = await Product.find()
        if(data.length===0){
            return res.status(400).json({
                message: "Khong co san pham"
            })
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const getOne = async (req,res)=>{
    try {
        const data = await Product.findById({_id: req.params.id}).populate({
            path: "categoryId",
            select:"-__v",
        })
        if(!data){
            return res.status(400).json({
                message: "San pham khong ton tai"
            })
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const Additem = async (req,res)=>{
    try {
        const body = req.body
        const {error} = checkitem.validate(body)
        if(error){
            const errors = error.details.map((err)=> err.message);
            return res.status(400).json({message: errors}) 
        }
        const data = await Product.create(body);
        if(!data){
            return res.status(400).json({
                message: "Them san pham that bai"
            })
        }
        return res.status(200).json({
            message: "Them san pham thanh cong",
            data
        })
    } catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const removeitem= async (req,res)=>{
    try {
        const data = await Product.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(400).json({
                message:"Khong xoa duoc san pham"
            })
        }
        return res.status(200).json({
            message:"Xoa san pham thanh cong",
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const update= async (req,res)=>{
    try {
        const id= req.params.id
        const body = req.body
        const data = await Product.findOneAndUpdate({_id:id}, body,{new: true})
        if(!data){
            return res.status(400).json({
                message:"Cap nhap san pham that bai",
            })
        }
        return res.status(200).json({
            message:"Cap nhap thanh cong",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
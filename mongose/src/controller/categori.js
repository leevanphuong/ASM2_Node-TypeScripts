import Categories from "../model/categories";
import Joi from "joi";
import Product from "../model/product";
const cateSchema= Joi.object({
    name: Joi.string().required()
});
// lấy 1 danh muc 
export const getOne = async (req,res)=>{
    try {
        const cate = await Categories.findById(req.params.id).populate("products")
        if(!cate){
            return res.status(400).json({
                message:"Khong tim thay danh muc"
            })
        }
        const products = await Product.find({ categoryId: req.params.id })
        return res.json({ ...cate.toObject(), products });
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
// thêm danh muc
export const addCate = async (req,res)=>{
    try {
        const body = req.body
        const {error}= cateSchema.validate(body)
        if(error){
            const errors =error.details.map((err)=> err.message)
            return res.status(400).json({
                message: errors
            })
        }
        const data = await Categories.create(body)
        if(!data){
            return res.status(400).json({
                message:"Them danh muc that bai"
            })
        }
        return res.status(200).json({
            message:"Them danh muc thanh cong",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
// lấy tất cả danh muc
export const getAll =async (req,res)=>{
    try {
        const data = await Categories.find()
        if(data.length===0){
            return res.status(400).json({
                message:"Khong co danh muc"
            })
        }
        return res.json(data)
    } catch(error) {
        return res.status(400).json({
            message: error.message
        })
    }
}

// xóa danh muc
export const remove = async (req,res)=>{
    try {
        const data = await Categories.findByIdAndDelete(req.params.id)
        if(!data){
            return res.status(400).json({
                message:"Khong tim thay danh muc",
            })
        }
        return res.status(200).json({
            message: "Xoa thanh cong danh muc",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
// cập nhập danh muc
export const updatecate = async (req,res)=>{
    try {
        const body = req.body
        const id =req.params.id
        const data = await Categories.findOneAndUpdate({_id: id}, body, {new: true})
        if(!data){
            return res.status(400).json({
                message:"Cap nhap that bai"
            })
        }
        return res.status(200).json({
            message: "Cap nhap thanh cong",
            data
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
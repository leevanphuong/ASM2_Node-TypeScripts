import Joi from "joi";
export const checkUser = Joi.object({
    name: Joi.string().required().messages({
        "string.emply":"Ten khong duoc de trong",
        "any.required": "Truong ten la bat buoc",
    }),
    email: Joi.string().email().required().messages({
        "string.empty":"Truong email khong duoc de trong",
        "any.required":"Truong email la bat buoc",
        "string.email": "Nhap email khoong dung dinh dang"
    }),
    password :Joi.string().required().min(6).messages({
        "string.empty":"Mk khong duoc de trong",
        "any.required":"mk bat buoc phai nhap",
        "string.min":"Mk phai co it nhat 6 ky tu"
    }),
    confirmpassword: Joi.string().required().valid(Joi.ref("password")).messages({
        "string.empty":"Khong duoc de trong phan confirm mk",
        "any.required":"Bat buoc phai nhap confirm mk",
        "any.only": "Mk xac nhan k khop"
    })
})

export const singinSchema = Joi.object({
    email: Joi.string().email().required().messages({
        "string.empty":"Truong email khong duoc de trong",
        "any.required":"Truong email la bat buoc",
        "string.email": "Nhap email khoong dung dinh dang"
    }),
    password :Joi.string().required().min(6).messages({
        "string.empty":"Mk khong duoc de trong",
        "any.required":"mk bat buoc phai nhap",
        "string.min":"Mk phai co it nhat 6 ky tu"
    })
})
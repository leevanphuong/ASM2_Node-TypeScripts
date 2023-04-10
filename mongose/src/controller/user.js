import { assert } from "joi";
import User from "../model/user";
import { checkUser, singinSchema } from "../schema/user";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const signup = async (req, res) => {
    try {
        const { error } = checkUser.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({ message: errors })
        }
        const userExit = await User.findOne({ email: req.body.email });
        if (userExit) {
            return res.status(400).json({
                message: "Email da ton tai"
            })
        }
        const handlePassword = await bcrypt.hash(req.body.password, 10)
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: handlePassword
        })
        const accessToken = jwt.sign({ _id: user.id }, 'phuongle', { expiresIn: '1d' })
        return res.status(200).json({
            message: "Dang ky thanh cong",
            accessToken,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
export const getAllUser = async (req, res) => {
    try {
        const data = await User.find()
        if (data.length === 0) {
            return res.status(400).json({
                message: "Khong co tai khoan nao"
            })
        }
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}


export const signin = async (req, res) => {
    try {
        const { email, password } = req.body
        const { error } = singinSchema.validate(req.body, { abortEarly: false })
        if (error) {
            const errors = error.details.map((err) => err.message)
            return res.status(400).json({
                message: errors
            })
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                message: "Ban chua dang ky tai khoan",
            })
        }
        const ismatch = await bcrypt.compare(password, user.password)
        if (!ismatch) {
            return res.status(400).json({
                message: "Mk khong dung"
            })
        }
        const accessToken = jwt.sign({ _id: user.id }, 'phuongle', { expiresIn: '1d' })
        return res.status(200).json({
            message: "Dang nhap thanh cong",
            accessToken,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message: error.message
        })
    }
}
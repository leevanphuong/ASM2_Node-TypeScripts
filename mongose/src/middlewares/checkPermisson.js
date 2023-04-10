import Jwt  from "jsonwebtoken";
import User from "../model/user";
export const checkpermisson = async(req,res,next)=>{
    try {
        if(!req.headers.authorization){
            return res.status(400).json({
                message:"Ban chua dang nhap"
            })
        }
        const token = req.headers.authorization.split(" ")[1];
        const {_id} = await Jwt.verify(token,'phuongle')
        const user = await User.findById(_id)
        if(user.role!=='admin' ){
            return res.status(400).json({
                message:"Ban khong co quyen try cap tai nguyen nay"
            })
        }
        next()
    } catch (error) {
        return res.status(400).json({
            message: error
        })
    }
}
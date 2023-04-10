import mongoose from "mongoose";
const checkitem =mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    desc:String,
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Category"  // lay tu bang category
    }
},{timeseries:true, versionKey:false})

export default mongoose.model('product', checkitem)
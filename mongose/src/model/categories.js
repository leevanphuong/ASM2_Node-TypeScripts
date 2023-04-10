import mongoose from "mongoose";
const cateSchema = mongoose.Schema({
    name:String,
    products: [{
        type: mongoose.Types.ObjectId, ref: "product"
    }]
}, {timestamps: true, versionKey: false})
export default mongoose.model('Category', cateSchema)
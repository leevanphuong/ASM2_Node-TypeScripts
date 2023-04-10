import express from "express"
import mongoose from  "mongoose"
import cors from "cors"
import productRouter from "./router/product"
import CateRouter from "./router/category"
import UserRouter from "./router/user"

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api',productRouter)
app.use('/api',CateRouter)
app.use('/api',UserRouter )


mongoose.connect('mongodb://127.0.0.1:27017/ASM')

export const viteNodeApp = app
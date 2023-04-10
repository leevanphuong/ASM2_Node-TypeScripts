import express from "express";
import { checkpermisson } from "../middlewares/checkPermisson";
import { Additem, getAll, getOne, removeitem, update } from "../controller/products";

const router = express.Router()

router.get('/products', getAll)
router.post('/products',checkpermisson, Additem)
router.get('/products/:id', getOne)
router.delete('/products/:id',checkpermisson, removeitem)
router.put('/products/:id',checkpermisson, update)



export default router
import express from "express";
import { checkpermisson } from "../middlewares/checkPermisson";
import { addCate, getAll, getOne, remove, updatecate } from "../controller/categori";

const router = express.Router()
router.get('/categori/:id', getOne)
router.delete('/categori/:id',checkpermisson, remove)
router.put('/categori/:id',checkpermisson, updatecate)
router.get('/categori/', getAll)
router.post('/categori',checkpermisson, addCate)

export default router
import express from 'express'
import { getAllUser, signin, signup} from '../controller/user'
const router = express.Router()

router.post('/signup', signup),
router.post('/signin', signin)
router.get('/signup', getAllUser)
export default router
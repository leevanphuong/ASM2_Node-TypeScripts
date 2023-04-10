import axios from "axios";

const Product = axios.create({
    baseURL:'http://localhost:5050/api'
})
const Cate = axios.create({
    baseURL:'http://localhost:5050/api'
})
const User = axios.create({
    baseURL:'http://localhost:5050/api'
})

export {Product, Cate,User}
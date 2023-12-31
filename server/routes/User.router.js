const route =require('express').Router()
const {getUser,register,login,updateUser,getUserEmail,markAsPayed}=require('../controller/User')
route.get('/user',getUser)
route.get('/:email',getUserEmail)
route.post('/reg',register)
route.post("/log/:email",login)
route.put("/upd/:id",updateUser)
route.get("/payed/:id",markAsPayed)
module.exports=route
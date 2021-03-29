const express = require("express")
const {getBootcamps,getBootcamp,updateBootcamp,deleteBootcamp,createBootcamp} =require('../controllers/bootcamps.js')
const routes=express.Router()
routes.route('/').get(getBootcamps).post(createBootcamp);
routes.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp)
module.exports=routes
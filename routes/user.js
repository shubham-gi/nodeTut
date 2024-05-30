const express=require('express')
const router=express.Router();

const userController=require('../controller/users')
router
.get('/',userController.getUsers)
.get('/:id',userController.getUser)
.post('/',userController.createUser)
.put('/:id',userController.replaceUser)
.patch('/:id',userController.updateUser)
.delete('/:id',userController.deleteUser)
exports.router=router

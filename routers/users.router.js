const express=require('express');
const router=express.Router();
const userController=require('../controllers/users.controller.js');
const authMiddleware = require('../utils/auth.middleware');

// authMiddleware.authenticateToken, ya que cree un usuario
router.post('/', authMiddleware.authenticateToken, userController.registerUser);

router.get('/',userController.getUsers);

router.post('/login',userController.loginUser);

module.exports=router;
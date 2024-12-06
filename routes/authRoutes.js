const express = require('express');
const { registerController,loginController, CurrentUserController } = require('../controllers/authController.js');
const authmiddleware = require('../middlewares/authmiddleware.js');

const router = express.Router();

//routes
//Register || POST
router.post('/register', registerController );

//LOGIN || POST
router.post('/login', loginController );

// GET CURRENT USER || GET
router.get('/current-user', authmiddleware, CurrentUserController)

module.exports = router;
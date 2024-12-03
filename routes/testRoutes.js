const express = require('express')
const {testController}  = require("../controllers/testController.js");

//router object
const router = express.Router();

//routes
router.get("/", testController);

// export router
module.exports = router;
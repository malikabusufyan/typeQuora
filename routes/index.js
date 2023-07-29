const express = require("express");
const router = express.Router();

//Import controller for creating routes from them
const userController = require("../controllers/userController");
const quotationController = require("../controllers/quotationController");

//Creating API for singUP
router.post("/signup", userController.signUp);

//Creating API for singIn
router.post("/signin", userController.signIn);

//Creating API for Quotation
router.post("/create-quotation", quotationController.createQuotation);
module.exports = router;

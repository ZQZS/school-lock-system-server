const express = require("express");
const login = require("../module/api/user/login.js");
const getUserHours = require("../module/api/user/getUserHours.js");
const getUserOrderList = require('../module/api/user/getUserOrderList.js')
const isRegisterOpen = require('../module/api/user/isRegisterOpen.js')
const userRegister = require('../module/api/user/userRegister.js')
const updataPersonInfo = require('../module/api/user/updataPersonInfo.js')


const router = express.Router();

/* GET users listing. */
router.post("/login", login);
router.post("/userRegister", userRegister);
router.get("/getUserHours", getUserHours);
router.get("/getUserOrderList",getUserOrderList)
router.get("/isRegisterOpen",isRegisterOpen)
router.post("/updataPersonInfo",updataPersonInfo)


module.exports = router;

const express = require("express");
const selectTimeFindPlace = require("../module/api/order/selectTimeFindPlace.js");
const getPlaceList = require("../module/api/order/getPlaceList.js");
const order = require("../module/api/order/order.js");
const selectPlaceFindTime = require("../module/api/order/selectPlaceFindTime.js");
const getBookTimeOptions = require("../module/api/order/getBookTimeOptions.js");
const getOrderDetail = require("../module/api/order/getOrderDetail.js");
const recallOrder = require("../module/api/order/recallOrder.js");

const router = express.Router();

/* GET users listing. */
router.post("/selectTimeFindPlace", selectTimeFindPlace);

router.get("/getPlaceList", getPlaceList);

router.post("/order", order);

router.post("/selectPlaceFindTime", selectPlaceFindTime);
router.post("/getOrderDetail", getOrderDetail);
router.post("/recallOrder", recallOrder);

router.get("/getBookTimeOptions", getBookTimeOptions);
module.exports = router;

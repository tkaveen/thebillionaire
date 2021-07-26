const express = require("express");
const { requireSignin, adminMiddleware } = require("../../common-middleware");
const {
  updateOrder,
  getCustomerOrders,
  getChartDetails,
  getChartDetailsTwo,
} = require("../../controller/admin/order.admin");
const router = express.Router();

router.post(`/order/update`, requireSignin, adminMiddleware, updateOrder);
router.post(
  `/order/getCustomerOrders`,
  requireSignin,
  adminMiddleware,
  getCustomerOrders
);

router.get(`/order/getChartDetails/`, getChartDetails);

router.get(`/order/getChartDetailsTwo/`, getChartDetailsTwo);

module.exports = router;

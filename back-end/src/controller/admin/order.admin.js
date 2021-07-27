const Order = require("../../models/order");
const Product = require("../../models/product");
const Category = require("../../models/category");
const user = require("../../models/user");
const User = require("../../models/user");
const order = require("../../models/order");

exports.updateOrder = (req, res) => {
  Order.updateOne(
    { _id: req.body.orderId, "orderStatus.type": req.body.type },
    {
      $set: {
        "orderStatus.$": [
          { type: req.body.type, date: new Date(), isCompleted: true },
        ],
      },
    }
  ).exec((error, order) => {
    if (error) return res.status(400).json({ error });
    if (order) {
      res.status(201).json({ order });
    }
  });
};

exports.getCustomerOrders = async (req, res) => {
  const orders = await Order.find({})
    .populate("items.productId", "name")
    .populate("addressId.UserAddress.address")
    .populate({ path: "user", select: "_id firstName lastName" })
    .exec();

  res.status(200).json({ orders });
};

exports.getCustomerOrders = async (req, res) => {
  const orders = await Order.find({})
    .populate("items.productId", "name")
    .populate("addressId.UserAddress.address")
    .populate({ path: "user", select: "_id firstName lastName" })
    .exec();

  res.status(200).json({ orders });
};

exports.getChartDetails = async (req, res) => {
  try {
    order
      .aggregate([
        {
          $group: {
            _id: {
              $arrayElemAt: [{ $split: [{ $toString: "$createdAt" }, "-"] }, 1],
            },
            total: { $sum: 1 },
          },
        },
      ])
      .then((dta) => {
        res.status(200).json(dta);
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getChartDetailsTwo = async (req, res) => {
  var dataArray = [];
  try {
    order
      .aggregate([
        {
          $group: {
            _id: {
              $arrayElemAt: [{ $split: [{ $toString: "$createdAt" }, "-"] }, 1],
            },
            total: { $sum: { $multiply: ["$totalAmount"] } },
          },
        },
        {
          $sort: { total: 1 },
        },
      ])
      .then((dta) => {
        dataArray = dta;
        res.status(200).json(dataArray);
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getChartDetailsThree = async (req, res) => {
  try {
    user
      // .populate()
      .aggregate([
        {
          $group: {
            _id: {
              $arrayElemAt: [{ $split: [{ $toString: "$createdAt" }, "-"] }, 1],
            },
            total: { $sum: 1 },
          },
        },
      ])
      .then((dta) => {
        res.status(200).json(dta);
      });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getChartDetailsFour = async (req, res) => {
  // const users = await User.find({ role: "user" }).count().exec();
  const users = await User.find({}).count().exec();
  const categories = await Category.find({}).count().exec();
  const products = await Product.find({})
    .select(
      "_id name price quantity slug description productPictures category offer"
    )
    .populate({ path: "category", select: "_id name" })
    .count()
    .exec();
  const orders = await Order.find({})
    .populate("items.productId", "name")
    .populate({ path: "user", select: "_id firstName lastName" })
    .populate({ path: "addressId.userAddress.address", select: "address" })
    .count()
    // .populate("addressId.address", "address")
    .exec();
  res.status(200).json({
    users,
    categories,
    products,
    orders,
  });
};

exports.getChartDetailsFive = async (req, res) => {
  var total_income = 0;
  try {
    await order
      .find()
      .then((data) => {
        data.forEach((item) => {
          total_income = item.totalAmount + total_income;
        });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });

    res.status(200).json({
      total_income: total_income,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

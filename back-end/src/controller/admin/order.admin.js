const Order = require("../../models/order");
const Address = require("../../models/address");

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
    .populate("User", "name")
    .exec();
  res.status(200).json({ orders });
};

// exports.getCustomerOrders = async (req, res) => {
//   const orders = await Order.find({})
//     .populate("items.productId", "name")
//     .populate("UserAddress.address", "address")
//     .lean()
//     .exec((error, order) => {
//       if (error) return res.status(400).json({ error });
//       if (order) {
//         Address.findOne({
//           order: req.body.orderId,
//         }).exec((error, address) => {
//           if (error) return res.status(400).json({ error });
//           order.address = address.address.find(
//             (adr) => adr._id.toString() == order.addressId.toString()
//           );
//           res.status(200).json({
//             order,
//           });
//         });
//       }
//     });
//   res.status(200).json({ orders });
// };

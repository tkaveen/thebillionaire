// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// const reviewSchema = new Schema(
//   {
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//     productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
//     review: {
//       type: String,
//     },
//     rating: { type: Number, Required: true },
//   },
//   { timestamps: true }
// );

// const Review = mongoose.model("Review", reviewSchema);

// module.exports = Review;

const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    rating: { type: Number, required: true },
    review: { type: String, required: false },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Review = mongoose.model("Review", reviewSchema);

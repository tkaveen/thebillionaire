const Review = require("../models/review");

exports.addReview = async (req, res) => {
  const { userId, productId, review, rating } = req.body;
  const reviewObj = {
    userId,
    productId,
    review,
    rating: Number(rating),
  };

  const rev = new Review(reviewObj);
  await rev.save((err, review) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (review) {
      return res.status(201).json({ review });
    }
  });
};

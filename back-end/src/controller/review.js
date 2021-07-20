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

exports.getReview = async (req, res) => {

  await Review.find({ productId: req.params.id })
  .populate("userId")
  .exec()
  .then((data) => {
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(404).json({ message: "not found" });
    }
  })
  .catch((err) => {
    res.status(500).json(err);
  });
  // await Review.find({ productId: req.params.id })
  //   .populate('userId')
  //   .exec()
  //   .then((res)=>{
  //     if(res){
  //       return res.status(200).json( review );
  //     }else{
  //       return res.status(400).json({ err });
  //     }
  //   })
  //   .catch((err) => {
  //     res.status(500).json(err);
  //   });

    // .exec((err, review) => {
    //   if (err) {
    //     return res.status(400).json({ err });
    //   }
    //   if (review) {
    //     return res.status(200).json( review );
    //   }
    // });
};

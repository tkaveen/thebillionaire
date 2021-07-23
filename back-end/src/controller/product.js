const Product = require("../models/product");
const shortid = require("shortid");
const slugify = require("slugify");
const Category = require("../models/category");

exports.createProduct = (req, res) => {
  //   res.status(200).json({ file: req.files, body: req.body });
  const {
    name,
    price,
    description,
    offer,
    category,
    quantity,
    reviews,
    ratings,
    createdBy,
  } = req.body;

  let productPictures = [];
  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }
  const product = new Product({
    name: req.body.name,
    slug: slugify(name),
    price,
    quantity,
    description,
    offer,
    productPictures,
    category,
    reviews,
    ratings,

    createdBy: req.user._id,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(201).json({ product });
    }
  });
};

exports.getProductsBySlug = (req, res) => {
  const { slug } = req.params;
  Category.findOne({ slug: slug })
    .select("_id")
    .exec((error, category) => {
      if (error) {
        return res.status(400).json({ error });
      }
      if (category) {
        Product.find({ category: category._id }).exec((error, products) => {
          if (error) {
            return res.status(400).json({ error });
          }
          if (products.length > 0) {
            res.status(200).json({ products });
          }
        });
      }
    });
};

exports.getProductDetailsById = (req, res) => {
  const { productId } = req.params;
  if (productId) {
    Product.findOne({ _id: productId }).exec((error, product) => {
      if (error) return res.status(400).json({ error });
      if (product) {
        res.status(200).json({ product });
      }
    });
  } else {
    return res.status(400).json({ error: "Params Required" });
  }
};

exports.deleteProductById = (req, res) => {
  const { productId } = req.body.payload;
  if (productId) {
    Product.deleteOne({ _id: productId }).exec((error, result) => {
      if (error) return res.status(400).json({ error });
      if (result) {
        res.status(202).json({ result });
      }
    });
  } else {
    res.status(400).json({ error: "Params Required" });
  }
};

exports.updateProduct = async (req, res) => {
  //const { _id, name,price,quantity, description,offer, productImages } = req.body;

  /* const product = {  _id, name,price,quantity, description,offer, productImages  };

  const updatedProduct = await Product.findOneAndUpdate({ _id }, product, {
    new: true,
  });

  return res.status(201).json({ updatedProduct}); */

  //saving all Productimages uploaded in an array
  // let productImages = [];

  //if productImages exists then mapping them to a array of objects as needed in the product schema
  // if (req.files.length > 0) {
  //   productImages = req.files.map((file) => {
  //     return { img: file.filename };
  //   });
  // }

  // const { name, price, description, category, quantity, createdBy } = req.body;

  let productPictures = [];

  if (req.files.length > 0) {
    productPictures = req.files.map((file) => {
      return { img: file.filename };
    });
  }

  try {
    await Product.findById(req.body._id).then((product) => {
      product._id = req.body._id;
      product.name = req.body.name;
      product.description = req.body.description;
      product.offer = req.body.offer;
      product.price = req.body.price;
      product.quantity = req.body.quantity;
      product.category = req.body.category;

      if (productPictures.length > 0) {
        product.productPictures = productPictures;
      }

      product
        .save()
        .then(() =>
          res.status(201).json({ msg: "You've Updated the product!" })
        )
        .catch((err) => res.status(400).json({ error: err.message }));
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
      .then(() =>
        res.status(200).json({ msg: "Product Deleted Successfully!" })
      )
      .catch((err) => res.status(400).json("Error: " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({ createdBy: req.user._id })
    .select("_id name price quantity slug description productPictures category")
    .populate({ path: "category", select: "_id name" })
    .exec();

  res.status(200).json({ products });
};

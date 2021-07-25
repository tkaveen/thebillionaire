import React, { useState } from "react";
import Layout from "../../components/Layout/index";
import { Container, Row, Col, Table, Jumbotron, Button } from "react-bootstrap";
import Input from "../../components/Ui/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProductById,
  updateProduct,
} from "../../actions/product.action";
import Modal from "../../components/Ui/Modal/Modal";
import "../Products/Product.css";
import { generatePublicUrl } from "../../urlConfig";
import { AiOutlineDelete } from "react-icons/ai";
import { BsFileEarmark } from "react-icons/bs";
import { IoShirtOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

export default function Products() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [offer, setOffer] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPictures, setProductPictures] = useState([]);
  const [show, setShow] = useState(false);
  const [productDetails, setProductDetails] = useState(null);
  const [productDetailModal, setProductDetailModal] = useState(false);
  const [productUpdateModal, setProductUpdateModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const [productdeleteModal, setProductDeleteModal] = useState(false);
  const category = useSelector((state) => state.category);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const [productIdUpdate, setProductIdUpdate] = useState("");
  const [productNameUpdate, setProductNameUpdate] = useState("");
  const [productPriceUpdate, setProductPriceUpdate] = useState("");
  const [productQtyUpdate, setProductQtyUpdate] = useState("");
  const [productDescriptionUpdate, setProductDescriptionUpdate] = useState("");
  const [productOfferUpdate, setProductOfferUpdate] = useState("");
  const [productCategoryUpdate, setProductCategoryUpdate] = useState({});
  const [productImageUpdate, setProductImageUpdate] = useState([]);

  const handleClose = () => {
    const form = new FormData();

    if (name === "") {
      alert("Name can't be empty!");
      return;
    }

    if (quantity === "") {
      alert("Quantity can't be empty!");
      return;
    }
    if (isNaN(quantity)) {
      alert("Quantity must be a number!");
      return;
    }
    if (price === "") {
      alert("Price can't be empty!");
      return;
    }
    if (isNaN(price)) {
      alert("Price must be a number!");
      return;
    }
    if (description === "") {
      alert("Description can't be empty!");
      return;
    }

    if (offer === "") {
      alert("offer can't be empty!");
      return;
    }
    if (isNaN(offer)) {
      alert("offer must be a number!");
      return;
    }

    if (!categoryId) {
      alert("Category can't be empty!");
      return;
    }
    if (productPictures.length < 0) {
      alert("Product images can't be empty!");
      return;
    }

    form.append("name", name);
    form.append("quantity", quantity);
    form.append("price", price);
    form.append("description", description);
    form.append("offer", offer);
    form.append("category", categoryId);
    for (let pic of productPictures) {
      form.append("productPicture", pic);
    }
    dispatch(addProduct(form));
    setShow(false);
  };

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  const handleProductPictures = (e) => {
    setProductPictures([...productPictures, e.target.files[0]]);
  };

  const handleProductImageUpdate = (e) => {
    setProductImageUpdate(e.target.files[0]);
  };

  console.log(productPictures);
  const handleShow = () => setShow(true);

  const updateProductData = (prod) => {
    setProductUpdateModal(true);

    setProductIdUpdate(prod._id);
    setProductNameUpdate(prod.name);
    setProductDescriptionUpdate(prod.description);
    setProductOfferUpdate(prod.offer);
    setProductQtyUpdate(prod.quantity);
    setProductPriceUpdate(prod.price);
    setProductCategoryUpdate(prod.category);

    prod.productPictures.map((picture) => setProductImageUpdate(picture.img));
  };

  const handleCloseProductUpdateModal = () => {
    const form = new FormData();

    console.log(productNameUpdate);
    console.log(productIdUpdate);

    form.append("_id", productIdUpdate);
    form.append("name", productNameUpdate);
    form.append("description", productDescriptionUpdate);
    form.append("offer", productOfferUpdate);
    form.append("productImages", productImageUpdate);
    form.append("quantity", productQtyUpdate);
    form.append("price", productPriceUpdate);
    form.append("category", productCategoryUpdate._id);

    dispatch(updateProduct(form));
    setProductUpdateModal(false);
  };

  const renderProducts = () => {
    return (
      <Table className="prodtable" responsive="sm">
        <thead>
          <tr>
            <th></th>
            <th>Product Name</th>
            <th>Price(Rs.)</th>
            <th>Quantity</th>
            <th>Offer</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {product.products.length > 0
            ? product.products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <IoShirtOutline />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>{product.offer}</td>
                  <td>{product.category.name}</td>
                  <td>
                    <button
                      className="act-btn"
                      onClick={() => showProductDetailModal(product)}
                    >
                      info <BsFileEarmark />
                    </button>
                    <button
                      className="act-btn"
                      // onClick={() => showProductUpdateModal(product)}
                      onClick={() => {
                        updateProductData(product);
                      }}
                    >
                      Update <FaRegEdit />
                    </button>
                    <button
                      className="act-btn"
                      // onClick={() => {
                      //   const payload = {
                      //     productId: product._id,
                      //   };
                      //   dispatch(deleteProductById(payload));
                      // }}
                      onClick={() => {
                        showProductDeleteModal(true);
                        setCurrentProduct(product);
                      }}
                    >
                      Del <AiOutlineDelete />
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    );
  };

  const renderAddProductModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={"Add New Product"}
      >
        <Input
          label="Name"
          value={name}
          placeholder={`Product Name`}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Quantity"
          value={quantity}
          placeholder={`Quantity`}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <Input
          label="Price"
          value={price}
          placeholder={`Price`}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label>Description</label>
        <textarea
          class="form-control"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Input
          label="Offer"
          value={offer}
          placeholder={`offer`}
          onChange={(e) => setOffer(e.target.value)}
        />
        {/* <Input
          label="Description"
          value={description}
          placeholder={`Description`}
          onChange={(e) => setDescription(e.target.value)}
        /> */}
        <label style={{ marginTop: "15px" }}>Category</label>
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>select category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <label style={{ marginTop: "15px" }}>Product Pictures</label>
        <Input
          type="file"
          name="productPicture"
          onChange={handleProductPictures}
        />
      </Modal>
    );
  };

  const handleCloseProductDetailsModal = () => {
    setProductDetailModal(false);
  };
  // const handleCloseProductUpdateModal = () => {
  //   setProductUpdateModal(false);
  // };

  const showProductDetailModal = (product) => {
    setProductDetails(product);
    setProductDetailModal(true);
  };

  const handleCloseProductDeleteModal = () => {
    setProductDeleteModal(false);
  };

  const deleteProductData = (product) => {
    const payload = {
      productId: product._id,
    };
    dispatch(deleteProductById(payload));
    setProductDeleteModal(false);
  };

  const showProductDeleteModal = (product) => {
    // setProductDelete(product);
    setProductDeleteModal(true);
  };

  const showProductUpdateModal = (product) => {
    // setProductDetails(product);
    setProductUpdateModal(true);
  };

  const renderProductDetailsModal = () => {
    if (!productDetails) {
      return null;
    }
    return (
      <Modal
        show={productDetailModal}
        handleClose={handleCloseProductDetailsModal}
        modalTitle={"Product Details"}
        size="lg"
      >
        <Row>
          <Col md={6}>
            <label className="key">Name</label>
            <p className="value">{productDetails.name}</p>
          </Col>
          <Col md={6}>
            <label className="key">Price</label>
            <p className="value">{productDetails.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className="key">Quantity</label>
            <p className="value">{productDetails.quantity}</p>
          </Col>
          <Col md={6}>
            <label className="key">Category</label>
            <p className="value">{productDetails.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <label className="key">Offer</label>
            <p className="value">{productDetails.offer}</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <label className="key">Description</label>
            <p className="value">{productDetails.description}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <label className="key">Product Pictures</label>
            <div style={{ display: "flex" }}>
              {productDetails.productPictures.map((picture) => (
                <div className="productImgContainer">
                  <img src={generatePublicUrl(picture.img)} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Modal>
    );
  };

  const updateProductDetailsModal = () => {
    return (
      <Modal
        show={productUpdateModal}
        handleClose={handleCloseProductUpdateModal}
        modalTitle={"Product Update"}
        size="lg"
      >
        <Input
          lable="Product Name"
          type={"text"}
          value={productNameUpdate}
          placeholder={"Product Name"}
          onChange={(e) => {
            setProductNameUpdate(e.target.value);
          }}
        />
        <Input
          lable="Product Price"
          type={"text"}
          value={productPriceUpdate}
          placeholder={"Product Price"}
          onChange={(e) => {
            setProductPriceUpdate(e.target.value);
          }}
        />
        <Input
          lable="Product Quantity"
          type={"text"}
          value={productQtyUpdate}
          placeholder={"Product Quantity"}
          onChange={(e) => {
            setProductQtyUpdate(e.target.value);
          }}
        />
        <Input
          lable="Product Description"
          as="textarea"
          rows={3}
          value={productDescriptionUpdate}
          placeholder={"Product Description"}
          onChange={(e) => {
            setProductDescriptionUpdate(e.target.value);
          }}
        />
        <Input
          lable="Product Offer"
          type={"text"}
          value={productOfferUpdate}
          placeholder={"Product Offer"}
          onChange={(e) => {
            setProductOfferUpdate(e.target.value);
          }}
        />

        <label>Product Category</label>
        <select
          className="form-control"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <option>select category</option>
          {createCategoryList(category.categories).map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
        </select>
        <br></br>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupFile01">
            Upload Product Image
          </label>
          <input
            type="file"
            name="productImageUpdate"
            className="form-control"
            id="inputGroupFile01"
            onChange={handleProductImageUpdate}
          />
        </div>
        <div>
          {typeof productImageUpdate === "string" ? (
            <Row>
              <Col>
                <label style={{ color: "#333" }}>
                  Current Image Name: <br></br> {productImageUpdate}
                </label>
              </Col>
              <Col>
                <label style={{ color: "#333" }}>Current Image Preview:</label>
                <br></br>
                <img
                  style={{ maxWidth: "100px" }}
                  src={generatePublicUrl(productImageUpdate)}
                  alt="Category"
                />
              </Col>
            </Row>
          ) : null}
        </div>
      </Modal>
    );
  };

  const renderProductDeleteModal = () => {
    return (
      <Modal
        show={productdeleteModal}
        handleClose={handleCloseProductDeleteModal}
        modalTitle={"Product Details"}
        size="lg"
        buttons={[
          {
            label: "No",
            color: "primary",
            onClick: handleCloseProductDeleteModal,
          },
          {
            label: "Yes",
            color: "danger",
            onClick: () => deleteProductData(currentProduct),
          },
        ]}
      >
        Are you Sure?
        {/* <Button onClick={() => deleteProductData(currentProduct)}>
          delete
        </Button> */}
      </Modal>
    );
  };

  return (
    <Layout sidebar>
      <Container fluid>
        <Jumbotron className="jumb"
         
        >
          <h3
            className="text-center"
            style={{ fontSize: "40px", marginTop: "-20px" }}
          >
            Products
          </h3>
        </Jumbotron>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {/* <h3>Products</h3> */}
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleShow}
              >
                Add New Product
              </button>
            </div>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>{renderProducts()}</Col>
        </Row>
      </Container>
      {renderAddProductModal()}
      {renderProductDetailsModal()}
      {updateProductDetailsModal()}
      {renderProductDeleteModal()}
    </Layout>
  );
}

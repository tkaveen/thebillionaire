import React, { useEffect, useState } from "react";
import "./ProductOverview.css";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetailsById } from "../../../actions";
import { generatePublicUrl } from "../../../urlConfig";
import { addToCart } from "../../../actions/cart.action";
import { Select, FormControl, MenuItem, InputLabel } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Review from "../../Reviews/Review";
import { Form } from "react-bootstrap";
import { addReview, getReviews } from "../../../actions/review.action";
import StarRatings from "react-star-ratings";
import Card from "../../card/Card";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProductOverview = (props) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const [size, setSize] = useState();
  const classes = useStyles();
  const review = useSelector((state) => state.review);
  const [rate, setRate] = useState(0);
  const [reviews, setReviews] = useState([]);
  const { productId } = props.match.params;
  const [reviewDescription, setreviewDescription] = useState("");
  const [ratingValue, setRatingValue] = useState(0);

  let allRate = 0;

  const handleChange = (e) => {
    setSize(e.target.value);
  };

  const getReviews = async () => {
    console.log("we");
    await axios
      .get(`http://localhost:5000/api/review/getreview/${productId}`)
      .then((res) => {
        setReviews(res.data);
      });

    console.log("we2: " + reviews.length);
  };

  useEffect(() => {
    console.log(props);
    const payload = {
      params: {
        productId,
      },
    };
    dispatch(getProductDetailsById(payload));

    getReviews();
    console.log("K: " + productId);
  }, []);

  const currentProduct = product.productDetails._id;

  const addNewReview = () => {
    const reviewObj = {
      userId: auth.user._id,
      productId: currentProduct,
      review: reviewDescription,
      rating: ratingValue,
    };

    dispatch(addReview(reviewObj));

    setRatingValue(0);
    setreviewDescription("");
  };

  // useEffect(() => {
  //   if (product._id !== undefined) {
  //     dispatch(getReviews(product._id));
  //   }
  // }, [product._id]);

  console.log(product._id);
  console.log(review);

  if (Object.keys(product.productDetails).length === 0) {
    return null;
  }

  const calcRate = () => {
    let ratings = [];
    if (reviews) {
      for (let i = 0; i < reviews.length; i++) {
        ratings.push(reviews[i].rating);
      }
      let rateO = ratings.reduce((a, b) => a + b, 0) / ratings.length;
      var newrate = Math.round(rateO * 10) / 10;
      console.log("ko bn meka" + newrate);
      allRate = newrate;
      return newrate;
    } else {
      return 0;
    }
  };

  const changeRating = (newRating, name) => {
    setRatingValue(newRating);
    console.log(ratingValue);
  };

  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      {console.log("ado oi" + calcRate())}
      <div className="pricing__sectionPO">
        <div className="pricing__wrapper">
          <div className="pricing__container">
            <Link className="pricing__container-cardpo"></Link>
            <Link className="pricing__container-cardProdOver">
              <div>
                <br></br>
                <br></br>
                <h1>{product.productDetails.name}</h1>
                <br></br>
                <br></br>
                <br></br>
                <div>
                  <div className="row">
                    <div className="column">
                      <div className="imageholder">
                        <img
                          src={generatePublicUrl(
                            product.productDetails.productPictures[0].img
                          )}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="column">
                      <div className="overview">
                        <div className="overview-content">
                          <div className="price">
                            Rs. {product.productDetails.price}
                          </div>
                          <br></br>
                          <p>{product.productDetails.description}</p>
                          <hr></hr>
                          <br></br>
                          <div className="row">
                            <div className="column">
                              <div className="size">
                                {/* <h3>Size :</h3> */}
                                <br></br>
                                <div className="size">
                                  <FormControl className={classes.formControl}>
                                    <InputLabel
                                      id="demo-simple-select-label"
                                      style={{ color: "white" }}
                                    >
                                      Size
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={product.productDetails.size}
                                      onChange={handleChange}
                                      style={{ color: "white" }}
                                    >
                                      <MenuItem value={"Small"}>Small</MenuItem>
                                      <MenuItem value={"Medium"}>
                                        Medium
                                      </MenuItem>
                                      <MenuItem value={"Large"}>Large</MenuItem>
                                    </Select>
                                  </FormControl>
                                </div>
                              </div>
                              <br />
                              <h4 style={{ marginBottom: "10px" }}>
                                Ratings :{" "}
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <StarRatings
                                  rating={allRate ? allRate : 0}
                                  starDimension="25px"
                                  starSpacing="5px"
                                  starRatedColor="orange"
                                />
                                <h4
                                  style={{
                                    fontSize: "20px",
                                    marginLeft: "10px",
                                  }}
                                >{`(${reviews.length})`}</h4>
                              </div>
                            </div>
                          </div>
                          <br></br>
                          <br></br>
                          <Button
                            variant="contained"
                            onClick={() => {
                              const { _id, name, price } =
                                product.productDetails;
                              const img =
                                product.productDetails.productPictures[0].img;
                              dispatch(
                                addToCart({ _id, name, price, img, size })
                              );
                              props.history.push(`/cart`);
                            }}
                          >
                            Add to Cart
                          </Button>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          {/* <Button variant="contained">Buy Now</Button> */}
                        </div>
                      </div>
                      <br />
                      <br />
                      <br />
                      {auth.authenticate ? (
                        <div
                          className="loggedInId"
                          style={{ paddingBottom: "15px" }}
                        >
                          <div
                            className="comment"
                            style={{ fontSize: "20px", marginBottom: "10px" }}
                          >
                            Give a review about this product
                          </div>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlTextarea1"
                            >
                              <Form.Control
                                as="textarea"
                                rows={5}
                                cols={70}
                                value={reviewDescription}
                                onChange={(e) => {
                                  setreviewDescription(e.target.value);
                                }}
                                style={{ marginBottom: "5px" }}
                              />
                            </Form.Group>
                            <StarRatings
                              rating={ratingValue}
                              starDimension="25px"
                              starSpacing="5px"
                              starRatedColor="orange"
                              changeRating={changeRating}
                              numberOfStars={5}
                            />
                            <br />
                            <Button variant="contained" onClick={addNewReview}>
                              submit
                            </Button>
                            {/* <Button
                              variant="primary"
                              type="submit"
                              onSubmit={addNewReview}
                            >
                              Submit
                            </Button> */}
                          </Form>
                          {/* <span>
                            <b style={{ fontSize: "15px" }}>
                              {auth.user.fullName}
                            </b>
                          </span> */}
                        </div>
                      ) : null}

                      {/* <Review reviews={review} /> */}
                      {reviews
                        ? reviews.map((revie, index) => (
                            <Card key={index} style={{ marginTop: "10px" }}>
                              <div
                                style={{
                                  paddingTop: "7px",
                                  paddingLeft: "10px",
                                }}
                              >
                                <h3>
                                  {revie.userId.firstName}{" "}
                                  {revie.userId.lastName}
                                </h3>
                              </div>
                              <div
                                style={{
                                  paddingTop: "7px",
                                  paddingLeft: "10px",
                                }}
                              >
                                {revie.review}
                              </div>
                              <div>
                                <h4
                                  style={{
                                    paddingTop: "7px",
                                    paddingLeft: "10px",
                                    paddingBottom: "7px",
                                  }}
                                >
                                  Rating :{" "}
                                  <StarRatings
                                    rating={revie.rating}
                                    starDimension="20px"
                                    starSpacing="5px"
                                    starRatedColor="orange"
                                  />
                                </h4>
                              </div>
                            </Card>
                          ))
                        : null}
                      <br />
                    </div>
                  </div>
                </div>
                <ul className="pricing__container-features"></ul>
              </div>
            </Link>
            <Link className="pricing__container-cardpo"></Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default ProductOverview;

import axios from "../helpers/axios";
import { reviewConstants } from "./constants";

export const getReviews = (productId) => {
  return async (dispatch) => {
    dispatch({ type: reviewConstants.GET_REVIEW_REQUEST });
    const res = await axios.get(`http://localhost:5000/api/review/getreview/${productId}`);
    console.log(res);

    if (res.status === 200) {
      const { review } = res.data;
      dispatch({
        type: reviewConstants.GET_REVIEW_SUCCESS,
        payload: { review: review },
      });
    } else {
      dispatch({
        type: reviewConstants.GET_REVIEW_FAILURE,
        payload: {
          error: res.data.error,
        },
      });
    }
  };
};

export const addReview = (review) => {
  return async (dispatch) => {
    dispatch({ type: reviewConstants.ADD_REVIEW_REQUEST });
    try {
      const res = await axios.post("/review/addReview", review);
      if (res.status === 201) {
        dispatch({
          type: reviewConstants.ADD_REVIEW_SUCCESS,
          payload: { review: res.data.review },
        });
      } else {
        dispatch({
          type: reviewConstants.ADD_REVIEW_FAILURE,
          payload: res.data.error,
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
};

// export const getReviews = (payload) => {
//   return async (dispatch) => {
//     dispatch({ type: reviewConstants.GET_REVIEW_REQUEST });
//     let res;
//     try {
//       const { productId } = payload.params;
//       res = await axios.get(`/review/getReview/${productId}`);
//       console.log(res);
//       dispatch({
//         type: reviewConstants.GET_REVIEW_SUCCESS,
//         payload: { review: res.data.review },
//       });
//     } catch (error) {
//       console.log(error);
//       dispatch({
//         type: reviewConstants.GET_REVIEW_FAILURE,
//         payload: { error: res.data.error },
//       });
//     }
//   };
// };

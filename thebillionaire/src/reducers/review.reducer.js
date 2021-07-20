import { reviewConstants } from "../actions/constants";

const initState = {
  review: [],
  loading: false,
  error: null,
};

const buildNewReviews = (review, reviewOne) => {
  return [
    ...review,
    {
      userId: reviewOne.userId,
      productId: reviewOne.productId,
      review: reviewOne.review,
      rating: reviewOne.rating,
    },
  ];
};

export default (state = initState, action) => {
  switch (action.type) {
    case reviewConstants.GET_REVIEW_SUCCESS:
      state = {
        ...state,
        review: action.payload.review,
      };
      break;

    case reviewConstants.ADD_REVIEW_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;

    case reviewConstants.ADD_REVIEW_SUCCESS:
      const reviewOne = action.payload.review;
      const updatedReviews = buildNewReviews(state.review, reviewOne);
      console.log("updatedReviews", updatedReviews);

      state = {
        ...state,
        review: updatedReviews,
        loading: false,
      };
      break;

    case reviewConstants.ADD_REVIEW_FAILURE:
      state = {
        ...initState,
        loading: false,
      };
      break;
  }
  return state;
};

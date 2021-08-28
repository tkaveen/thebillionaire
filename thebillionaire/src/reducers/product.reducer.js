import { productConstants } from "../actions/constants";

const initialState = {
  products: [],
  productByPrice: {
    under1k: [],
    upper2k: [],
  },
  productDetails: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case productConstants.GET_ALL_PRODUCTS_BY_SLUG:
      state = {
        ...state,
        products: action.payload.products,
        productByPrice: {
          ...action.payload.productByPrice,
        },
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        productDetails: action.payload.productDetails,
      };
      break;
    case productConstants.GET_PRODUCT_DETAILS_BY_ID_REQUEST:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
  }
  return state;
};

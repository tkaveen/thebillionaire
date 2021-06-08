import { cartConstants } from "../actions/constants";

const initState = {
  cartItems: {},
};

export default (state = initState, action) => {
  switch (action.type) {
    case cartConstants.ADD_TO_CART:
      state = {
        ...state,
        cartItems: action.payload.cartItems,
      };
      break;
  }
  return state;
};

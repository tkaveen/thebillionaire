import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";
import cartReducer from "./cart.reducer";
import userReducer from "./user.reducer";
import reviewReducer from "./review.reducer";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer,
  auth: authReducer,
  cart: cartReducer,
  user: userReducer,
  review: reviewReducer,
});

export default rootReducer;

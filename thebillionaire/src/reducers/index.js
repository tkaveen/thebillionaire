import { combineReducers } from "redux";

// import productReducer from "./product.reducer";
import categoryReducer from "./category.reducer";


const rootReducer = combineReducers({
 
  category: categoryReducer,
  // product: productReducer,

});

export default rootReducer;

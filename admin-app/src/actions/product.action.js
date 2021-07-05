import axios from "../helpers/axios";
import { productConstants } from "./constants";

export const addProduct = (form) => {
  return async (dispatch) => {
    const res = await axios.post(`/product/create`, form);
    console.log(res);
  };
};

export const deleteProductById = (payload) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`product/deleteProductById`, {
        data: { payload },
      });
      dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_REQUEST });
      if (res.status === 202) {
        dispatch({ type: productConstants.DELETE_PRODUCT_BY_ID_SUCCESS });
        // dispatch(getProducts());
      } else {
        const { error } = res.data;
        dispatch({
          type: productConstants.DELETE_PRODUCT_BY_ID_FAILURE,
          payload: {
            error,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (form) => {
  return async (dispatch) => {
    dispatch({ type: productConstants.UPDATE_PRODUCT_REQUEST });

    const res = await axios.post("/product/update", form);
    if (res.status === 201) {
      dispatch({ type: productConstants.UPDATE_PRODUCT_SUCCESS });
      dispatch(getAllProducts());
    } else {
      const { error } = res.data;
      dispatch({
        type: productConstants.UPDATE_PRODUCT_FAILURE,
        payload: { error },
      });
    }
  };
};

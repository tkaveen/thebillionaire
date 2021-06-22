import { userConstants } from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {
  console.log(user);

  return async (dispatch) => {
    dispatch({ type: userConstants.USER_REGISTER_REQUEST });
    const res = await axios.post(`/admin/signup`, {
      ...user,
    });

    if (res.status === 201) {
      const { message } = res.data;
      dispatch({
        type: userConstants.USER_REGISTER_SUCCESS,
        payload: { message },
      });
    } else {
      if (res.status === 400) {
        dispatch({
          type: userConstants.USER_REGISTER_FAILURE,
          payload: { error: res.data.error },
        });
      }
    }
  };
};

// export const getOrder = (payload) => {
//   return async (dispatch) => {
//     try {
//       const res = await axios.post(`/getOrdersAdmin`, payload);
//       dispatch({ type: userConstants.GET_USER_ORDER_DETAILS_REQUEST });
//       if (res.status === 200) {
//         console.log(res);
//         const { order } = res.data;
//         dispatch({
//           type: userConstants.GET_USER_ORDER_DETAILS_SUCCESS,
//           payload: { order },
//         });
//       } else {
//         const { error } = res.data;
//         dispatch({
//           type: userConstants.GET_USER_ORDER_DETAILS_FAILURE,
//           payload: { error },
//         });
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

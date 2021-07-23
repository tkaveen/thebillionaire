import axios from "../helpers/axios";
import { mailConstants } from "./constants";

export const sendMail = (mail) => {
  return async (dispatch) => {
    dispatch({ type: mailConstants.SEND_MAIL_REQUEST });
    try {
      const res = await axios.post("/mail/sendmail", mail);
      if (res.status === 201) {
        dispatch({
          type: mailConstants.SEND_MAIL_SUCCESS,
          payload: { review: res.data.review },
        });
      } else {
        dispatch({
          type: mailConstants.SEND_MAIL_FAILURE,
          payload: res.data.error,
        });
      }
      console.log(res);
    } catch (error) {
      console.log(error.response);
    }
  };
};

// import axios from "axios";
import axios from "../helpers/axios";

export const getAllCategory = () => {
  return async (dispatch) => {
    const res = await axios.get(`category/getcategory`);
    console.log(res);
  };
};

import axios from "axios";
import config from "../config/app.json";
import * as types from "./actionTypes";

export const getAll = () => {
  return async (dispatch) => {
    const values = await Promise.allSettled([
      axios.get(`${config["API"]}products`),
      axios.get(`${config["API"]}categories`),
      axios.get(`${config["API"]}tags`),
    ]);

    dispatch({
      type: types.GET_ALL,
      payload: values,
    });
  };
};

export const getProduct = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${config["API"]}products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      dispatch({
        type: types.GET_PRODUCT,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "addErrorMessage",
        message: "Error",
      });
    }
  };
};

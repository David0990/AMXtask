import * as types from "./actionTypes";

const defaultState = {
  allProducts: null,
  allCategories: null,
  allTags: null,
  product: null,
  getProductsError: "",
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case types.GET_ALL: {
      let newValues = {
        allProducts: null,
        allCategories: null,
        allTags: null,
        getProductsError: "",
      };

      if (action.payload[0].status === "rejected") {
        newValues.getProductsError = "error";
      } else {
        newValues.allProducts = action.payload[0].value.data;
      }
      if (action.payload[1].status === "fulfilled") {
        newValues.allCategories = action.payload[1].value.data;
      }
      if (action.payload[2].status === "fulfilled") {
        newValues.allTags = action.payload[2].value.data;
      }

      return {
        ...state,
        ...newValues
      };
    }

    case types.GET_PRODUCT: {
      return {
        ...state,
        product: action.payload,
      };
    }

    default:
      return state;
  }
}

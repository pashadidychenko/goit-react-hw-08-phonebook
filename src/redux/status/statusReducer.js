import { createReducer } from "@reduxjs/toolkit";
import {
  statusInOn,
  statusExist,
  statusRemember,
} from "../status/statusActions";

const statusReducer = createReducer(
  { inOn: false, exist: false, remember: false },
  {
    [statusInOn]: (state, action) => ({
      ...state,
      inOn: action.payload,
    }),
    [statusExist]: (state, action) => ({
      ...state,
      exist: action.payload,
    }),
    [statusRemember]: (state, action) => ({
      ...state,
      remember: action.payload,
    }),
  }
);

export default statusReducer;

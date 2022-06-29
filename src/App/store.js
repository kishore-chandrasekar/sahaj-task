import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/Users";

export default configureStore({
reducer:{
user: userReducer,
}
})
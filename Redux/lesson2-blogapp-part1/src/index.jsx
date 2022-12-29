import React from "react";
import ReactDOM from "react-dom/client";
import "./style/bootstrap.min.css";
import AppRouter from "./routers/AppRouter";
import Favicon from "react-favicon";
import { createStore } from "redux";

// ACTION
const addBlog = () => ({
  type: "ADD_BLOG",
});

const blogs = [];
// REDUCER
const blogReducer = (state = blogs, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return "add blog";
    case "REMOVE_BLOG":
      return "add remove";
    case "UPDATE_BLOG":
      return "add update";
    default:
      break;
  }
};
// STORE
const store = createStore(blogReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addBlog());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Favicon url="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/ghost-icon-13-256.png" />
    <AppRouter />
  </React.StrictMode>
);

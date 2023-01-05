import React from "react";
import ReactDOM from "react-dom/client";
import "./style/bootstrap.min.css";
import AppRouter from "./routers/AppRouter";
import Favicon from "react-favicon";
import { createStore } from "redux";
import { v4 as uuid } from 'uuid';
// ACTION
const addBlog = ({title,desc,img}) => ({
  type: "ADD_BLOG",
  blog:{
    id:uuid(),
    title:title,
    desc:desc,
    img:img
  }
});



const blogState = [];
// REDUCER
const blogReducer = (state = blogState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state,action.blog];
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

store.dispatch(addBlog({title:"new title",desc:"new desc",img:"new img"}))
store.dispatch(addBlog({title:"blog",desc:"blog desc",img:"blog img"}))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Favicon url="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/ghost-icon-13-256.png" />
    <AppRouter />
  </React.StrictMode>
);

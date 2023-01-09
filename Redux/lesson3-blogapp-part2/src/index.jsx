import React from "react";
import ReactDOM from "react-dom/client";
import "./style/bootstrap.min.css";
import AppRouter from "./routers/AppRouter";
import Favicon from "react-favicon";
import { createStore } from "redux";
import { addBlog } from "./actions/blogAction";
import { blogReducer } from "./reducers/blogReducer";
import { Provider } from "react-redux";


// STORE
const store = createStore(blogReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addBlog({title:"new title1",desc:"new desc",img:"https://images.hdqwalls.com/wallpapers/react-js-logo-no.jpg"}))
store.dispatch(addBlog({title:"blog",desc:"blog desc",img:"https://wallpapercave.com/wp/wp4923979.png"}))


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <Provider store={store}>
   <Favicon url="https://iconsplace.com/wp-content/uploads/_icons/800080/256/png/ghost-icon-13-256.png" />
    <AppRouter />
   </Provider>
  </React.StrictMode>
);

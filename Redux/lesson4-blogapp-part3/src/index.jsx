import React from "react";
import ReactDOM from "react-dom";
import "./style/bootstrap.min.css";
import AppRouter from "./routers/AppRouter";
import Favicon from "react-favicon";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import { getBlogsFromDatabase } from './actions/blogAction';
const store = configureStore();



const result = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
)



ReactDOM.render(<><img src="https://thumbs.gfycat.com/CreepyPessimisticAlbino-max-1mb.gif" /></>, document.getElementById('root'));

store.dispatch(getBlogsFromDatabase()).then(() => {
    ReactDOM.render(result, document.getElementById('root'));
})




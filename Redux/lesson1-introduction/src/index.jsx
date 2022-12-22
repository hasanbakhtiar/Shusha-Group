import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';

const initialState = {
  count:0
};

const store  = createStore((state = initialState,action)=>{
  switch(action.type){
    case "INCREMENT": 
    const newData = typeof action.payload === 'number' ? action.payload : 1
    return {
      count: state.count + newData
    }
    case "DECREMENT": 
    return {
      count: state.count - 1
    }
    case "RESET": 
    return {
      count: 0
    }

    default:
      return{
        count: state.count
      }

  }
})

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch({
  type:"INCREMENT",
  payload:"10"
})


store.dispatch({
  type:"INCREMENT",
  payload:20
})

store.dispatch({
  type:"INCREMENT",
  payload:100
})









const App=()=>{
  return(
    <>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


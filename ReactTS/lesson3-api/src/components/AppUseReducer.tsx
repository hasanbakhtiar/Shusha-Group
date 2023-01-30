// import { useReducer } from "react";
// import { Button, Container } from "react-bootstrap";
// interface CounterState {
//   count: number;
// }
// interface CounterAction {
//   type: string;
//   payload: number;
// }

// const intialState = { count: 0 };

// const reducer = (state: CounterState, action: CounterAction) => {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + action.payload };
//     case "decrement":
//       return { count: state.count - action.payload };
//     case 'reset':
//         return intialState;
//     default:
//         return {count:state.count}
//   }
// };

// const AppUseReducer = () => {
//     const [state,dispatch] = useReducer(reducer,intialState);
//   return (
//     <Container className="mt-5">
//       <Button variant="danger" onClick={()=>dispatch({type:'decrement',payload:1})}>-1</Button>
//       <span className="mx-3">{state.count}</span>
//       <Button variant="success" onClick={()=>dispatch({type:'increment',payload:1})}>+1</Button>
//       <Button variant="warning" onClick={()=>dispatch({type:"reset",payload:0})} className="ms-3">
//         reset
//       </Button>
//     </Container>
//   );
// };

// export default AppUseReducer;


import { useReducer } from "react";
import { Button, Container } from "react-bootstrap";
interface CounterState {
  count: number;
}
interface ResetAction {
    type: 'reset'
}
interface UpdateAction{
    type: 'increment' | 'decrement',
    payload:number
}

type CounterAction = UpdateAction | ResetAction ;

const intialState = { count: 0 };

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case 'reset':
        return intialState;
    default:
        return {count:state.count}
  }
};

const AppUseReducer = () => {
    const [state,dispatch] = useReducer(reducer,intialState);
  return (
    <Container className="mt-5">
      <Button variant="danger" onClick={()=>dispatch({type:'decrement',payload:1})}>-1</Button>
      <span className="mx-3">{state.count}</span>
      <Button variant="success" onClick={()=>dispatch({type:'increment',payload:1})}>+1</Button>
      <Button variant="warning" onClick={()=>dispatch({type:"reset"})} className="ms-3">
        reset
      </Button>
    </Container>
  );
};

export default AppUseReducer;
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(10);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={decrement}>-1</button>
      {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
};
 export default Counter;
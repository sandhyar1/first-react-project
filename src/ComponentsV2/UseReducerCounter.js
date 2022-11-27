import React, { useReducer } from "react";
//by using state as an object we can use mutiple  variables use myultipe reducer
//increasing varilble fisrly simple intail state :0 then object then object have 2 properties.
const intialState = {
  firstCounter: 0,
  secondCounter:10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state ,firstCounter: state.firstCounter + action.value };
    case "decrement":
      return {...state, firstCounter: state.firstCounter - action.value};
      case "increment2":
        return { ...state,secondCounter: state.secondCounter + action.value };
      case "decrement2":
        return { ...state,secondCounter: state.secondCounter - action.value};
    case "reset":
      return intialState;
    default:
      return state;
  }
};
function UseReducerCounter() {
  const [count, dispatch] = useReducer(reducer, intialState);

  return (
    <div>
      <div>FirstCounter - {count.firstCounter}</div>
      <div>SecondCounter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement5
      </button>
      <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
        Increment count 2
      </button>
      <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
        Decrement count 2
        </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default UseReducerCounter;

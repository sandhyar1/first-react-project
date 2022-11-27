import React ,{useReducer} from "react";
import "./App.css";
import logo from "./logo.svg";
import ComponentA from "./ComponentsV2/ComponentA";
import ComponenetB from "./ComponentsV2/ComponenetB";
import ComponentC from "./ComponentsV2/ComponentC";

export const CountContext = React.createContext();

const intialState =0;
const reducer = (state,action) =>{
   switch(action){
    case 'increment':
        return state+1
    case 'decrement':
        return state -1
    case 'reset':
    return intialState
    default:
        return state
   }

}

function App() {
  const [count,dispatch] = useReducer(reducer,intialState)
  return (
    <CountContext.Provider value ={{countState:count ,countDispatch:dispatch}}>

    <div className="App">
    Count -{count}
     <ComponentA />
     <ComponenetB />
     <ComponentC />
    </div>
    </CountContext.Provider>
  )
}

export default App;

import React from "react";
import "./App.css";
import logo from "./logo.svg";
import ComponentC from "./ComponentsV2/ComponentC";
import CounterOne from "./ComponentsV2/UseReducerCounterOne";
import UseReducerCounter from "./ComponentsV2/UseReducerCounter";
import UseReducerMultiple from "./ComponentsV2/UseReducerMultiple";
import ComponentA from "./ComponentsV2/ComponentA";
import CoponentB from "./ComponentsV2/ComponentB";
//export const UserContext = React.createContext()

//export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
     <ComponentA />
     <ComponentB />
     <ComponentC />
   
    {/*
      <UseReducerMultiple />
     <UseReducerCounter />
    <UseReducerCounterOne/ >
     <UserContext.Provider value ={"Sandhya"}>
     <ChannelContext.Provider value={"Hii react"}>
    <ComponentC />
     </ChannelContext.Provider>
    
    <ComponentC />
      </UserContext.Provider>
     <Datafetching />
    <UseEffectInterval />
    <IntervaLCounter />*/}
  
    </div>
  )
}

export default App;

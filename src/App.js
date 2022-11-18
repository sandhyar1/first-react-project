import  logo from "./logo.svg";
import "./App.css";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
// import Greet  from "./components/Greet";
// import Welcome from "./components/Welcome";
// import Hello  from  "./components/Hello";
// import { render } from "@testing-library/react";
// import Message from "./components/Message"
// import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
    <ChildComponent />
    <ParentComponent />
    {/*<ClassClick />
  <FunctionClick />*/}
    {/*<EventBind  />
  {/* <Counter />*/}
      { /*<Message />
      <Greet name="bruce" heroName="batman">
        <p>This is a children props</p></Greet>
       <Greet name="diana" heroName="batman" >
  <button>Submit</button></Greet>*/}
        {/*<Greet name="clark" heroName="batman"  />*/}

       {/*<Welcome name="bruce" heroName="batman"></Welcome>
       <Welcome name="bruce" heroName="batman"></Welcome>
       <Welcome name="bruce" heroName="batman"></Welcome> 
{/*<Hello />*/}
         </div>
  );
}

export default App;

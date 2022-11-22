import logo from "./logo.svg";
import "./App.css";
import  PureComp  from "./components/PureComp";
import RegComp from "./components/RegComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import Input from "./components/Input";
import FocusInput from "./components/FocusInput";
//import table from "./components/table";

function App() {
  return (
    <div className="App">
    <FocusInput />
    {/*<Input />
    /*<RefsDemo />
    {/*<ParentComp/>
    {/*<PureComp/>
    <RegComp/>
    
      {/*<table />
      {/*<FragmentDemo/>*/}
    </div>
  );
}

export default App;

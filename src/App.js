import logo from "./logo.svg";
import "./App.css";
import UseMemoCounter from "./ComponentsV2/UseMemoCounter";
import UseRef1 from "./ComponentsV2/UseRef1";
import UseRefTimer from "./ComponentsV2/UseRefTimer";
import UseRefTimer1 from "./ComponentsV2/UseRefTimer1";
import Doctitle from "./ComponentsV2/Doctitle";
import Doctitle2 from "./ComponentsV2/DocTitle2";
import useDocTitle from "./Custom Hooks/useDocTitle"
import CustomCounter from "./ComponentsV2/CustomCounter";
import CustomCounter2 from "./ComponentsV2/CustomCounter2";
import UseForm from "./ComponentsV2/UseForm";
import useInput from "./Custom Hooks/useInput";

function App() {
 
  return (
  <div className="App">
  <UseForm />
    <useInput />
    
  
  {/*
   <UseForm />
  <CustomCounter />
  <CustomCounter2 />
  <DocTitle />
  <useDocTitle/>
  <DocTitle1/>
  <UseRefTimer1 />
   <UseRefTimer />
   <ParentComponent/>
  <UseReducerDataFetch />
  <UseStateDatafetch/>
     <UseMemoCounter/>
     <UseRef1 />
*/}

    
    </div>
  
  )
}

export default App;

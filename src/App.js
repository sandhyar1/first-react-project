import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import HoverCounter from "./components/HoverCounter";

function App() {
  return (
    <div className="App">
    <ClickCounter />
    <HoverCounter />
    
    {/*
    <ErrorBoundary>
    <Hero heroName="Batman"/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero heroName="Superman"/>
    </ErrorBoundary>

    <ErrorBoundary>
    <Hero heroName="joker"/>
    </ErrorBoundary>
    <PortalDemo />
<FRParentInput />*/}
    </div>
  );
}

export default App;

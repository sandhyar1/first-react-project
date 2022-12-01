import logo from './logo.svg';
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import {Home } from './Routing/Home'
import {About } from './Routing/About'

function App() {
  return (
    <Routes >
    <Route path="/"element={<Home />}></Route>
    <Route path="/"element={<About />}></Route>
    </Routes>
  );
  }
export default App;


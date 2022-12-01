import logo from './logo.svg';
import "./App.css";
import {Routes,Route} from 'react-router-dom'
import {Home } from './Routing/Home'
import {About } from './Routing/About'
import {Navbar} from './Routing/Navbar'
import { OrderSummary } from './Routing/OrderSummary';

function App() {
  return (
    <>
    <Navbar />
    <Routes >
    <Route path="/"element={<Home />}></Route>
    <Route path="about"element={<About />}></Route>
    <Route path='order-summary' element={<OrderSummary/>}></Route>
    </Routes>
    </>
  );
 }
export default App;


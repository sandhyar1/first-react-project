import logo from './logo.svg';
import "./App.css";
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Home } from './Routing/Home'
//import {About } from './Routing/About'
import {Navbar} from './Routing/Navbar'
import { OrderSummary } from './Routing/OrderSummary';
import { NoMatch } from './Routing/NoMatch';
import {Products} from './Routing/Products'
import { FeaturedProducts } from './Routing/FeaturedProducts';
import { NewProducts } from './Routing/NewProducts';
import { Users } from './Routing/Users';
import { UserDetails } from './Routing/UserDetails';
import {Admin} from './Routing/Admin'
const LazyAbout =React.lazy(() =>import('./Routing/About'))


function App() {
  return (
    <>
    <Navbar />
    <Routes >
    <Route path="/"element={<Home />}></Route>
    <Route path="about"element={
      <React.Suspense fallback='Loading...'>
      <LazyAbout />
      </React.Suspense>
    }>
    </Route>
    <Route path='order-summary' element={<OrderSummary/>}></Route>
    <Route Index element={<FeaturedProducts/>} />
    <Route path='products' element={<Products/>} >
    <Route path='featured' element={<FeaturedProducts/>} />
    <Route path='new' element={<NewProducts />} />
    </Route> 
    <Route Path="*" element ={<NoMatch/>} />
    <Route path="users" element={<Users/>} >
    <Route path=':userId' element={<UserDetails />} />
    <Route path="users/admin" element={<Admin />} />
    </Route>
    </Routes>
    </>
  )
 }
export default App;




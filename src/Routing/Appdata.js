import logo from './logo.svg';
import "./App.css";
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Home } from './Routing/Home'
import {Profile} from './Routing/Profile';
import {Login} from './Routing/Login'
import {RequireAuth} from './Routing/RequireAuth'
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
import { AuthProvider } from './Routing/Auth';
const LazyAbout =React.lazy(() =>import('./Routing/About'))




function App() {
  return (
    <>
    <AuthProvider>
    <Navbar />
    <Routes >
    <Route path="/"element={<Home />}></Route>
    <Route path="about"element={
      <React.Suspense fallback='Loading...'>
      <LazyAbout />
      </React.Suspense>
    }>
    </Route>
    <Route path='products' element={<Profile/>} />
    <Route path='order-summary' element={<OrderSummary/>}></Route>
    <Route Index element={<FeaturedProducts/>} />
    <Route path='products' element={<Products/>} >
    <Route path='featured' element={<FeaturedProducts/>} />
    <Route path='new' element={<NewProducts />} />
    </Route> 5
    <Route path="users" element={<Users/>} >
    <Route path=':userId' element={<UserDetails />} />
    <Route path="users/admin" element={<Admin />} />
    </Route>
    <Route path='Profile' element={<RequireAuth><Profile /></RequireAuth> } />
    <Route path ='Login' element= {<Login  />} />
    <Route Path="*" element ={<NoMatch/>} />
    </Routes>
    </AuthProvider>
    </>
  )
 }
export default App;


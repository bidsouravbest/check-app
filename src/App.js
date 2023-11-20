import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import About from './components/About';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { Products } from './components/products/Products';
import { FeaturedProducts } from './components/products/FeaturedProducts';
import NewProducts from './components/products/NewProducts';
import UserDetails from './components/users/UserDetails';
import Users from './components/users/Users';
import AdminDetails from './components/users/AdminDetails';
import LoadingMsg from './components/messages/LoadingMsg';
const LazyAbout = React.lazy(() => import('./components/About'));


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/about'
          element={<React.Suspense fallback={<LoadingMsg />}>
            <LazyAbout />
          </React.Suspense>} />
        <Route path='/products' element={<Products />}>
          <Route path='featured-products' element={<FeaturedProducts />} />
          <Route path='new-products' element={<NewProducts />} />
        </Route>
        <Route path='users' element={<Users />} />
        <Route path='users/:userId' element={<UserDetails />} />
        <Route path='users/admin' element={<AdminDetails />} />
      </Routes>
    </div>
  );
}

export default App;

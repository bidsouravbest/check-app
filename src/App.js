import React from 'react';
import './App.css';
import Home from './components/home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './components/navigation/NavBar';
import { Products } from './components/products/Products';
import { FeaturedProducts } from './components/products/FeaturedProducts';
import NewProducts from './components/products/NewProducts';
import UserDetails from './components/login/users/UserDetails';
import Users from './components/login/users/Users';
import AdminDetails from './components/login/users/AdminDetails';
import LoadingMsg from './components/messages/LoadingMsg';
import Profile from './components/login/Profile';
import PageNotFound from './components/messages/PageNotFound';
import Login from './components/login/Login';
import { AuthProvider } from './components/utils/Auth';
import RequireAuth from './components/login/RequireAuth';

const LazyAbout = React.lazy(() => import('./components/about/About'));


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/about'
            element={
              <React.Suspense fallback={<LoadingMsg />}>
                <LazyAbout />
              </React.Suspense>} />
          <Route path='/products' element={<Products />}>
            <Route path='featured-products' element={<FeaturedProducts />} />
            <Route path='new-products' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />} />
          <Route path='users/:userId' element={<UserDetails />} />
          <Route path='users/admin' element={<AdminDetails />} />
          <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

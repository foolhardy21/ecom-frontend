import { Signup, Login, Products, Wishlist, Cart, Home, NotFound, Profile, Product } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { LoginProvider, SignupProvider, useAuth } from 'contexts';
import { ROUTE_CART, ROUTE_CHECKOUT, ROUTE_HOME, ROUTE_LOGIN, ROUTE_PRODUCTS, ROUTE_PROFILE, ROUTE_SIGNUP, ROUTE_WISHLIST } from 'utils/constants.util';
import Checkout from 'pages/Checkout';

function App() {
  const { RequireAuth } = useAuth()

  return (

    /* page routes */

    <BrowserRouter>
      <Routes>

        <Route path={ROUTE_HOME} element={<Home />} />

        <Route path={ROUTE_SIGNUP} element={
          <SignupProvider>
            <Signup />
          </SignupProvider>
        } />

        <Route path={ROUTE_LOGIN} element={
          <LoginProvider>
            <Login />
          </LoginProvider>
        } />

        <Route path={ROUTE_PRODUCTS} element={<Products />} />

        <Route path={ROUTE_WISHLIST} element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        } />

        <Route path={ROUTE_CART} element={
          <RequireAuth>
            <Cart />
          </RequireAuth>
        } />

        <Route path={ROUTE_PROFILE} element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />

        <Route path={ROUTE_CHECKOUT} element={
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        } />

        <Route path='/products/:productId' element={<Product />} />

        {/* <Route path='/mock' element={<MockMan />} /> */}

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;

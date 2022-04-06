import { Signup, Login, Products, Wishlist, Cart, Home, NotFound } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { LoginProvider, SignupProvider, useAuth } from './contexts';
import { ROUTE_CART, ROUTE_HOME, ROUTE_LOGIN, ROUTE_PRODUCTS, ROUTE_SIGNUP, ROUTE_WISHLIST } from 'utils/constants.util';

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

        <Route path='/mock' element={<MockMan />} />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;

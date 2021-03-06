import { Signup, Login, Products, Wishlist, Cart, Home, NotFound, Profile, Product, LoginAndSecurity, Addresses, AddressForm } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginProvider, SignupProvider, useAuth } from 'contexts';
import { ROUTE_ACCOUNT, ROUTE_ADDRESSES, ROUTE_ADDRESS_FORM, ROUTE_CART, ROUTE_CHECKOUT, ROUTE_HOME, ROUTE_LOGIN, ROUTE_PRODUCT, ROUTE_PRODUCTS, ROUTE_PROFILE, ROUTE_SIGNUP, ROUTE_WISHLIST } from 'utils/constants.util';
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

        <Route path={ROUTE_PRODUCT} element={<Product />} />

        <Route path={ROUTE_ACCOUNT} element={
          <RequireAuth>
            <LoginAndSecurity />
          </RequireAuth>
        } />

        <Route path={ROUTE_ADDRESSES} element={
          <RequireAuth>
            <Addresses />
          </RequireAuth>
        } />

        <Route path={ROUTE_ADDRESS_FORM} element={
          <RequireAuth>
            <AddressForm />
          </RequireAuth>
        } />

        <Route path='*' element={<NotFound />} />

      </Routes >
    </BrowserRouter >

  );
}

export default App;

import { Signup, Login, Products, Wishlist, Cart, Home, NotFound } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { LoginProvider, SignupProvider, useAuth } from './contexts';

function App() {
  const { RequireAuth } = useAuth()

  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/signup' element={
          <SignupProvider>
            <Signup />
          </SignupProvider>
        } />

        <Route path='/login' element={
          <LoginProvider>
            <Login />
          </LoginProvider>
        } />

        <Route path='/products' element={<Products />} />

        <Route path='/wishlist' element={
          <RequireAuth>
            <Wishlist />
          </RequireAuth>
        } />

        <Route path='/cart' element={
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

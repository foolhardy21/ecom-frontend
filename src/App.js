import { Signup, Login, Products, Wishlist, Cart, Home, NotFound } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { LoginProvider, SignupProvider } from './contexts';

function App() {
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
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mock' element={<MockMan />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

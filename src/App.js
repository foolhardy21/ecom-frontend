import { Signup, Login, Products, Wishlist, Cart, Home } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";
import { SignupProvider } from './contexts';

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
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/mock' element={<MockMan />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

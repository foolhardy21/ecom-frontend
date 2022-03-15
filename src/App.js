import { Signup, Cart, Home, Wishlist, Products, Login } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Products />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/wishlist' element={<Wishlist />} />

        <Route path='/signup' element={<Signup />} />

        <Route path='/login' element={<Login />} />


      </Routes>
    </BrowserRouter>

  )

}

export default App;

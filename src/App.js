import { Signup } from './components/Signup';
import { Cart, Home, Wishlist, Products } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/products' element={<Products />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/wishlist' element={<Wishlist />} />

      </Routes>
    </BrowserRouter>

  )

}

export default App;

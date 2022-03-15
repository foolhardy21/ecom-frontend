import { Signup } from './components/Signup';
<<<<<<< HEAD
import { Login } from './components/Login';
import { ProductsPg } from "./components/Products";
import { Cart, Home, Wishlist } from "./pages";
||||||| parent of c115c05 (fix - merge conflicts removed)
import { ProductsPg } from "./components/Products";
import { Cart, Home, Wishlist } from "./pages";
=======
import { Cart, Home, Wishlist, Products } from "./pages";
>>>>>>> c115c05 (fix - merge conflicts removed)
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

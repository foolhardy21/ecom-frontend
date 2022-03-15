import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { ProductsPg } from "./components/Products";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist/index";
import { Home } from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/products' element={<ProductsPg />} />

        <Route path='/cart' element={<Cart />} />

        <Route path='/wishlist' element={<Wishlist />} />

      </Routes>
    </BrowserRouter>

  )

}

export default App;

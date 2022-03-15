import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { ProductsPg } from "./components/Products";
import { Cart } from "./components/Cart";
import { Wishlist } from "./components/Wishlist/index";

const App = () => {

  return (
    <>
      <Login />
      <Signup />
      <ProductsPg />
      <Cart />
      <Wishlist />
    </>
  );

}

export default App;

import { Signup } from './components/Signup';
import { Login } from './components/Login';
import { ProductsPg } from "./components/Products";
import { Cart } from "./components/Cart";

const App = () => {

  return (
    <>
      <Login />
      <Signup />
      <ProductsPg />
      <Cart />

    </>
  );

}

export default App;

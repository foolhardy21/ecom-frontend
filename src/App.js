import { Signup, Login, Products } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<Products />} />
        <Route path='/mock' element={<MockMan />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

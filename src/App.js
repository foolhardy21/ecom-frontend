import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MockMan from "mockman-js";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/mock' element={<MockMan />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

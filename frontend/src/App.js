import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Cartslider from "./page/cartslider";
import Counter from "./page/counter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Cartslider />} path="/cart" />
        <Route element={<Counter />} path="/counter" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

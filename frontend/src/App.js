import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./page/menu";
import Home from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Menu />} path="/menu" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

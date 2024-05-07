import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

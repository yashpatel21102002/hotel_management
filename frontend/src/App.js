import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./page/contact";
import Signin from "./page/signin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Contact />} path="/" />
        <Route element={<Signin />} path="/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Products from "../pages/Products";

function App() {
  return (
    <>
     <BrowserRouter>
     <Nav/>
       <div className="container">
       <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
        </Routes>
       </div>
     </BrowserRouter>
    </>
  );
}

export default App;

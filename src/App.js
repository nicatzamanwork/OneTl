import "./App.css";
import "./component/Navbar";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import Gained from "./component/Gained";
import Signup from "./component/Sigup";
import Login from "./component/Login";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/kazandıklarım" element={<Gained />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;

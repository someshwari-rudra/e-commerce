import Home from "./pages/Home"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
// import ProductList from "./pages/ProductList";
// import Product from "./pages/Product";
 import Cart from "./pages/Cart";
import Login from "./pages/Login";
 import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/Register" element={<Register />} ></Route>
          <Route path="/Login" element={<Login />} ></Route>
          <Route path="/Cart" element={<Cart />} ></Route>
        </Routes>

      </Router>
    </>
  );
}

export default App;

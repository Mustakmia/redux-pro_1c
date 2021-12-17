import {
  BrowserRouter,
  Route, Routes, Navigate,

} from "react-router-dom";
import Product from "./components/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register"


const App = () => {
  const user = true
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} >

        </Route>
        <Route path="products/:catagory*" element={<ProductList />}>
        </Route>
        <Route path="product/:id*" element={<Product />} >
        </Route>
        <Route path="cart*" element={<Cart />} >
        </Route>
        {/* <Route path="login*" element={<Login />} >
          {user ? <Navigate to="/" /> : <Login />}
        </Route>
        <Route path="register*" element={<Register />} >
          {user ? <Navigate to="/" /> : <Register />}
        </Route> */}
      </Routes>
    </BrowserRouter>
  )
};

export default App;

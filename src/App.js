import { Routes, Route } from "react-router-dom";
import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Products />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="*" element={<PageNotFound />} />
        <Route exact path="/product/*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default App;

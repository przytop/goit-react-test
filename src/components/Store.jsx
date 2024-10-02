import { Routes, Route } from "react-router-dom";
import StoreNav from "./StoreNav";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import ProductDetails from "../pages/ProductDetails";
import Mission from "./Mission";
import Team from "./Team";
import Reviews from "./Reviews";
import NotFound from "../pages/NotFound";

export default function Store() {
  return (
    <div>
      <StoreNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

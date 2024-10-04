import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import StoreNav from "./StoreNav";
import { LoginNavigate } from "./LoginNavigate";
import NotFound from "../pages/NotFound";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Mission = lazy(() => import("./Mission"));
const Team = lazy(() => import("./Team"));
const Reviews = lazy(() => import("./Reviews"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const LoginProfile = lazy(() => import("./LoginProfile"));

export default function Store() {
  return (
    <div>
      <StoreNav />

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="mission" element={<Mission />} />
            <Route path="team" element={<Team />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="profile" element={<LoginProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <LoginNavigate />
    </div>
  );
}

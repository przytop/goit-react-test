import ProductList from "../components/ProductList";
import { getProducts } from "../shop-api";

export default function Products() {
  const products = getProducts();

  return (
    <main>
      <ProductList products={products} />
    </main>
  );
}

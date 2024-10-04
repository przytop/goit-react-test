import { Link, useLocation } from "react-router-dom";
import css from "./ProductList.module.css";

export default function ProductList({ products }) {
  const location = useLocation();

  return (
    <div className={css.div}>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`} state={location}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

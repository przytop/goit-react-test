import { Link } from "react-router-dom";

export default function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`${product.id}`}>
            <img src="https://via.placeholder.com/200x100" alt="" />
            <h3>{product.name}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
}

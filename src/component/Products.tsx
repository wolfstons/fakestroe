import { Product } from "./Product";
import { useProductContext } from "../context/ProductContext";

function Products() {
  const { productsList, load, error } = useProductContext();

  if (load) {
    return <p className="message">Termékek betöltése...</p>;
  }

  if (error) {
    return <p className="message error">{error}</p>;
  }

  if (productsList.length === 0) {
    return <p className="message">Nincsenek megjeleníthető termékek.</p>;
  }

  return (
    <div className="products-grid">
      {productsList.map((product) => (
        <Product key={product.id} adat={product} />
      ))}
    </div>
  );
}

export default Products;

import type { productTypes } from "../types/productTipes";

interface ProductProps {
  adat: productTypes;
}

export function Product({ adat }: ProductProps) {
  return (
    <article className="product-card">
      <img className="product-image" src={adat.image} alt={adat.title} />
      <div className="product-info">
        <p className="product-category">{adat.category}</p>
        <h3>{adat.title}</h3>
        <p className="product-description">{adat.description}</p>
        <div className="product-bottom">
          <strong>{adat.price.toFixed(2)} $</strong>
          <span>★ {adat.rating.rate} ({adat.rating.count} értékelés)</span>
        </div>
      </div>
    </article>
  );
}

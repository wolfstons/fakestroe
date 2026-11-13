import type { productTypes } from "../types/productTipes";

interface ProductProps {
  adat: productTypes;
}   

export function Product({ adat }: ProductProps) {
  return (
    <div key={adat.id}>
      <h3>{adat.title}</h3>
      <p>{adat.description}</p>
      <p>price: {adat.price}</p>
    </div>
  );
}
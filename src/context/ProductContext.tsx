import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { productTypes } from "../types/productTipes";
import { getProducts } from "../service/ProductService";

interface ProductContextType {
  productsList: productTypes[];
  load: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const [productsList, setProductsList] = useState<productTypes[]>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProductsList(data);
        setError(null);
      })
      .catch(() => {
        setError("Nem sikerült betölteni a termékeket.");
      })
      .finally(() => {
        setLoad(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ productsList, load, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("A useProductContext csak a ProductProvider-en belül használható.");
  }

  return context;
}

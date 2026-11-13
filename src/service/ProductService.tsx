import type { productTypes } from "../types/productTipes";

const API_URL = "https://fakestoreapi.com/products";

export async function getProducts(): Promise<productTypes[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Hiba történt a termékek lekérésekor.");
  }

  return (await response.json()) as productTypes[];
}

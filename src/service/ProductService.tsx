

const API_URL = "https://fakestoreapi.com/products";

export function getProducts() {
  return fetch(API_URL)
    .then((response ) => response.json())
    .then((data) => data);
}

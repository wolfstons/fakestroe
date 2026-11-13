import React from 'react'
import { useProductContext } from '../context/ProductContext'

function Products() {
    const { productsList, load, error } = useProductContext();

    if (load) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Error: {error}</div>
    }

  return (
    <div></div>
  )
}

export default Products
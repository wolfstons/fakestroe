import React, { createContext, useContext, useEffect, useState } from "react";
import type { productTypes } from "../types/productTipes";
import { getProducts } from "../service/ProductService";

interface ProductContextType {
  productsList: productTypes[];
  load:boolean;
  error:string|null;


}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({children}:{children:React.ReactNode}) {
    const [productsList, setProductsList] = useState<productTypes[]>([]);
    const [load,setload] =useState<boolean>(true)
    const [error,setError] =useState<String|null>(null)

    useEffect(() => {
        getProducts().then((data) => {

            setProductsList(data);
            setError(null);
        })
        .catch(()=>{
            setError("nem sikerült vetölteni")
        })
        .finally(()=>{
            setload(false)
        })
    }, []);

    
    return (
       < ProductContext.Provider value={{productsList, load:false, error:null}}>
        {children}
       </ProductContext.Provider>
    )
}

export function useProductContext() {
    const context = useContext(ProductContext);
    if (context===undefined){
        throw new Error("csak a product provideren belül használható")
    }


    return context;
}
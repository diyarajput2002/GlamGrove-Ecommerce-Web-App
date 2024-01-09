import React from 'react';
import { ProductsData } from '../data/products';
import { useState , useEffect } from 'react';

export const ProductsContext = React.createContext()

const Productscontextprovider = ({children}) => {

    const [products , setProducts] = useState([]);

    useEffect(() => {
        setProducts(ProductsData)
    },[])

    
    return (
        <div>
            <ProductsContext.Provider value={products}>
               {children}
            </ProductsContext.Provider>
            
        </div>
    );
};

export default Productscontextprovider;
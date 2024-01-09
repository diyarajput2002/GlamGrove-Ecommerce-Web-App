import React, {useContext} from 'react';
import {Link , useParams} from 'react-router-dom'
import css from './Detail.module.css'
import { ProductsContext } from '../../context/Productscontextprovider'


const Detail = () => {

    const params = useParams()
    const id = params.id
    const data = useContext(ProductsContext) 
    const product= data[ id - 1 ]  
    const {img , name , price , description , type} = product;

    return (
        <>
            <div className={css.container}>
            <img className={css.image} src={img} alt='product'/>
            <div className={css.textcontainer}>
              <h3>{name}</h3>
              <p className={css.description}>{description}</p>
              <p className={css.category}><span>category :</span> {type}</p>
              <div className={css.button}>
                 <p className={css.price}>{price} $</p>
                 <Link to='/'>back to shop</Link>
              </div>
            </div>
            
           </div>

        
        </>
    );
};

export default Detail;
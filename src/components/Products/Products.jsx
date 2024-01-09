import React, { useState , useContext } from 'react';
import css from './Products.module.css';
import plane from "../../assets/plane.png";
import {ProductsData} from '../../data/products';
import {useAutoAnimate} from '@formkit/auto-animate/react'
import {Link} from "react-router-dom";
import { cartContext } from '../../context/CartContextProvider';
import { isInCart, quantityCount } from '../../helper/functions';
import trashIcon from '../../assets/icons/trash.svg'

const Products = () => {


const [parent] = useAutoAnimate()

const [MenuProducts , setMenuProducts] = useState(ProductsData);

const filter = (type) => {

    setMenuProducts(ProductsData.filter(product => product.type === type))
}

const {state, dispatch} = useContext(cartContext)

  return (
    <div className={css.container}>
        <img src={plane} alt='plane' className={css.plane}/>
        <h1>Our Featured Products</h1>
        <div className={css.products}>
            <ul className={css.menu} ref={parent}>
                <li onClick={() => setMenuProducts(ProductsData)}>All</li>
                <li onClick={() => filter("skin care")}>Skin Care</li>
                <li onClick={() => filter("conditioner")}>Conditioners</li>
                <li onClick={() => filter("foundation")}>Foundations</li>
            </ul>
            <div className={css.list}>
                {MenuProducts.map((product , i) => (
                  <div className={css.myproduct} key={i}>
                    <div className={css.left_s}>
                      <div className={css.name}>
                        <span>{product.name}</span>
                        <span>{product.detail}</span>
                      </div>
                      <span>{product.price}$</span>
                      <div className={css.shop}>
                        <div className={css.buttoncontainer}>
                        {quantityCount(state, product.id) > 1 && 
                        <button className={css.smallbutton_n} style={{fontSize : "1.5rem"}} onClick={() => dispatch({type : "DECREASE" , payload : product})}>-</button>}
                        {quantityCount(state , product.id) === 1 && 
                        <button className={css.smallbutton_t} onClick={() => dispatch({type : "REMOVE_ITEM" , payload : product})}><img src={trashIcon} alt='trash' style={{width :"20px" , height : "20px"}}/></button>}
                        {quantityCount(state , product.id) > 0 && <span style={{fontSize : "1.2rem"}} className={css.counter}>{quantityCount(state , product.id)}</span>}
                        {
                          isInCart(state, product.id) ? 
                          <button className={css.smallbutton_p} style={{fontSize : "1.5rem"}} onClick={() => dispatch({type:"INCREASE" , payload: product})}>+</button> :
                          <button  onClick={() => dispatch({type:"ADD_ITEM" , payload: product})}>shop now</button>
                        }
                        </div>
                        
                        <div className={css.details}><Link to={`/detail/${product.id}`}>details</Link></div>
                      </div>
                      
                    </div>

                    <img src={product.img} alt='img-p' className={css.img_p}/>

                        </div>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Products
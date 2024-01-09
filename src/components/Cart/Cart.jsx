import React , {useContext} from 'react';

import { cartContext } from '../../context/CartContextProvider';

import trashIcon from '../../assets/icons/trash.svg'

import Styles from "../Cart/cartshop/Cart.module.css"

const Cart = (props) => {

    const {dispatch} = useContext(cartContext);
    const {img , price , name , quantity} = props.data
    return (
        <div className={Styles.container}>
            <img className={Styles.image} src={img} alt="product"/>
            <div className={Styles.data}>
                <h3>{name}</h3>
                <p>{price} $</p>
            </div>
            <div className={Styles.quantity}>
                {quantity}
            </div>
            <div className={Styles.buttoncontainer}>
                {
                    quantity > 1 ? 
                    <button onClick={() => dispatch({type: "DECREASE" , payload: props.data})}>-</button> :
                    <button className={Styles.trash} onClick={() => dispatch({type: "REMOVE_ITEM" , payload: props.data})}><img src={trashIcon} alt="trash"/></button>
                }
                <button onClick={() => dispatch({type: "INCREASE" , payload: props.data})}>+</button>
            </div>
            
        </div>
    );
};

export default Cart;
import React , {useContext} from 'react';
import Cart from '../Cart.jsx';
import {Link} from "react-router-dom"

import {cartContext} from "../../../context/CartContextProvider.js"
import Styles from "../cartshop/Cartshop.module.css"

const CartShop = () => {

    const {state , dispatch} = useContext(cartContext)
    return (
        <div className={Styles.container}>
        <div className={Styles.cartcontainer}>
            {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
        </div>
        <div className={Styles.payment}>
            {
                state.itemsCounter > 0 && <div>
                <p><span>Total Items :</span>{state.itemsCounter}</p>
                <p><span>Total Payment :</span>{state.total} $</p>
                <div className={Styles.buttoncontainer}>
                    <button className={Styles.clear} onClick={() => dispatch({type: "CLEAR"})}>CLEAR</button>
                    <button className={Styles.checkout} onClick={() => dispatch({type: "CHECKOUT"})}>Check Out</button>
                    
                </div>
                </div>

            }
            {
                state.checkOut && <div className={Styles.complete}>
                    <h3>Checked Out Successfully</h3>
                    <Link to="/landing">Buy More</Link>
                </div>
            }
            {  !state.checkOut && state.itemsCounter === 0 && <div className={Styles.complete}>
                    <h3>Want To Buy ?</h3>
                    <Link to="/landing">Back To Shop</Link>
                </div>

            }

        </div>
        </div>
    );
};

export default CartShop;
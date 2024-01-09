import React, { useState , useContext} from 'react';
import './Header.css'
import Logo from '../../assets/logo.png'
import {CgShoppingBag} from 'react-icons/cg'
import {FaBars} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {cartContext} from '../../context/CartContextProvider'



const Header = () => {

  const {state}=useContext(cartContext)

  const [isOpen , setIsOpen] =useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="container">
        <a href='/' className="logo">
            <img src={Logo} alt='logo' />
            <span>amazon</span>
        </a>
        
        <div className="right">
            <div className="bars" onClick={toggleMenu} >
                <FaBars/>
                
            </div>
                <ul className={`menu ${isOpen ? 'active' : ''}`}>
                    <li>Collections</li>
                    <li>Brands</li>
                    <li>New</li>
                    <li>Sales</li>
                    <li>ENG</li>
                </ul>

            <input className="search" placeholder='search' />
            <div>
            <Link to='/cartshop'><CgShoppingBag className="cart"/></Link> 
            <span className={`itemscounter ${isOpen ? 'active' : '' }`}>{state.itemsCounter}</span>
            </div>
            
        </div>

    </div>
  )
}

export default Header
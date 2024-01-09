import React from 'react';
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import {motion} from 'framer-motion'

const Hero = () => {
   const transition ={ duration : 3 , type : "spring"}
  return (
    <div className={css.container}>
        {/* left side */}
       <div className={css.h_sides}>
        <span className={css.text1}>skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>seedily say has suitable disposal and boy.exercise joy man 
            children rejoiced</span>
        </div>
       </div>

       {/* middle hero section */}
       <div className={css.wrapper}>
          <motion.div className={css.blueCircle}
          initial={{bottom :"0.5rem"}}
          whileInView={{bottom : "-1.5rem"}}
          transition={transition}
          ></motion.div>
          <motion.img 
          initial={{bottom :"-3.5rem"}}
          whileInView={{bottom : "-1.5rem"}}
          transition={transition}
          src={HeroImg} alt='hero' width={600}/>

          <motion.div className={css.cart2}
          transition={transition}
          initial={{right :"4%"}}
          whileInView={{right :"2%"}}
          >
            <RiShoppingBagFill className={css.svg} />

            <div className={css.signup}>
               <span>Signup | signin</span>
               <div>
                 <a href='/signup'><BsArrowRight/></a>
               </div>
            </div>
          </motion.div>

       </div>

       {/* right side */}
       <div className={css.h_sides_right}>
          <div className={css.traffic}>
             <span>1.5M</span>
             <span>Monthly Traffic</span>
          </div>

          <div className={css.customers}>
             <span>100K</span>
             <span>Happy Customers</span>
          </div>
       </div>
    </div>
  )
}

export default Hero
import React , {useState , useEffect} from 'react';
import validate from './validate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Styles from "./Signup.module.css";
import {Link} from "react-router-dom"

const Signup = () => {

const notify = (text , type) => {
    if(type === "success") {
        toast.success(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    } else {
        toast.error(text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    };

    const [data , setData] = useState({
        name : "",
        email: "",
        password : "" ,
        confirmPassword : "",
        isAccepted: false,
    });

    const changeHandler = event => {
        if(event.target.name === "isAccepted") {
            setData({...data,[event.target.name] : event.target.checked})
        } else {
            setData({...data,[event.target.name] : event.target.value} )
        }
        console.log(data)
    }

    const [errors , setErrors] = useState({})
    const [touched , setTouched] = useState({})

    const focusHandler = (event) => {
        setTouched({...touched , [event.target.name]: true})
    }

    const submitHandler =(event) => {
        event.preventDefault()
        if(!Object.keys(errors).length) {
            notify("you signed up successfully" , "success")
        } else {
            notify("invalid data!" , "error")
            setTouched({
                name :  true,
                email:  true,
                password :  true ,
                confirmPassword : true ,
                isAccepted: true ,
            })
        }
    }

    useEffect(() => {
        setErrors(validate(data , "signup"))
        console.log(errors)
    } , [data])

    return (
        <div className={Styles.containerall}>
            
            <form className={Styles.form} onSubmit={submitHandler}>
                <h2 className={Styles.header}>SignUp</h2>
                <div className={Styles.formfield}>
                    <label>Name</label>
                    <input className={(errors.name && touched.name) ? Styles.uncomplete :  Styles.forminput}
                     type='text' name='name' value={data.name}  onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
                <div className={Styles.formfield}>
                    <label>Email</label>
                    <input className={(errors.email && touched.email) ? Styles.uncomplete :  Styles.forminput }
                    type='text' name='email' value={data.email} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.email && touched.email && <span>{errors.email}</span>}

                </div>
                <div className={Styles.formfield}>
                    <label>Password</label>
                    <input className={(errors.password && touched.password) ? Styles.uncomplete :  Styles.forminput}
                    type='password' name='password' value={data.password} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.password && touched.password && <span>{errors.password}</span>}

                </div>
                <div className={Styles.formfield}>
                    <label>Confirm Password</label>
                    <input className={(errors.confirmPassword && touched.confirmPassword) ? Styles.uncomplete :  Styles.forminput}
                     type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={focusHandler}/>
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}

                </div>
                <div className={Styles.checkboxcontainer}>
                    <div className={Styles.checkbox}>
                    <label>I accept terms of privacy policy</label>
                    <input type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={focusHandler}/>
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={Styles.buttons}>
                    <Link to='/login'>Login</Link>
                    <button type='submit'>Sign up</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;
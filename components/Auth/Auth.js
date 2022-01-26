import styles from "./auth.module.css"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {UserCircleIcon} from "@heroicons/react/solid"


const initialState = {username: "", firstName:"", lastName:"" ,email:"", password:"", confirmPassword:""}

const Auth = () => {

    const [ isSignUp, setIsSignUp ] = useState(true)
    const [ formData, setFormData ] = useState(initialState)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value })
    }

    const switchMode = (e) => {
        e.preventDefault()
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    }

    return (
        <>
        <div className={styles.contentContainer}>
                <div className={styles.formContainer}>
                    <UserCircleIcon width="3.5rem" height="3.5rem"/>
                    <form className={styles.formContent}>
                        <h2>{isSignUp ? "Let's create an account!" : "Login"}</h2>
                        
                        {
                            isSignUp &&(
                                <>
                        <div className={styles.inputContainer}>
                            <label for="username" > Username </label>
                            <input type="text" placeholder="" id="username" onChange={handleChange}/>
                        </div>
                        <div className={styles.inputContainer}>                           
                            <label for="firstName" > First name </label>
                            <input type="text" placeholder="" id="firstName" onChange={handleChange}/>
                        </div>

                        <div className={styles.inputContainer}>    
                            <label for="lastName" > Last name </label>
                            <input type="text" placeholder="" id="lastName" onChange={handleChange}/>
                        </div>  
                                </>
                            )
                        }

                        <div className={styles.inputContainer}>    
                            <label for="email" > Email </label>
                            <input type="text" placeholder="Your email" id="email" onChange={handleChange}/>
                        </div>

                        <div className={styles.inputContainer}>    
                            <label for="password" > Password </label>
                            <input type="text" placeholder="" id="password" onChange={handleChange}/>
                        </div>

                        {isSignUp  &&(
                            <>
                        <div className={styles.inputContainer}>    
                            <label for="confirmPassword" > Confirm password </label>
                            <input type="text" placeholder="Confirm password" id="confirmPassword" onChange={handleChange}/>
                        </div>

                        <div className={styles.inputContainer}>      
                            <label for="group" > Group </label>
                            <input type="text" placeholder="" id="group" />
                        </div>
                            </>
                        )}
                        
                        <button className={styles.button}>Sign Up</button>

                    </form>
                </div>
        </div>
        </>
    );
};

export default Auth;

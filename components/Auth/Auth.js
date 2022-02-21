import styles from "./auth.module.css"
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {UserCircleIcon} from "@heroicons/react/solid"
import {useMutation, gql} from "@apollo/client"


const initialState = {username: "", firstName:"", lastName:"" ,email:"", password:"", confirmPassword:""}



const Auth = () => {

    const router = useRouter()
    const [ isSignUp, setIsSignUp ] = useState(true)
    const [ formData, setFormData ] = useState(initialState)

    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value })
    };

    const switchMode = (e) => {
        e.preventDefault()
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    };

    //Mutations Section
    const SIGN_UP_MUTATION = gql `
    `

    const SIGN_IN_MUTATION = gql`
    `



    const handleSubmit = (e) => {
        e.preventDefault()

    };

    const clearFormData = () => {
        setFormData(initialState)
    };

    return (
        <>
        <div className={styles.contentContainer}>
                <div className={styles.formContainer}>
                    <UserCircleIcon width="5rem" height="5rem"/>
                    <form  onSubmit={handleSubmit} className={styles.formContent}>
                        <h2>{isSignUp ? "Let's create an account!" : "Login"}</h2>
                        
                        {
                            isSignUp &&(
                                <>
                        <div className={styles.inputContainer}>
                            <label for="username" > Username </label>
                            <input type="text" placeholder="" name="username" onChange={handleChange}/>
                        </div>
                        <div className={styles.inputContainer}>                           
                            <label for="firstName" > First name </label>
                            <input type="text" placeholder="" name="firstName" onChange={handleChange}/>
                        </div>

                        <div className={styles.inputContainer}>    
                            <label for="lastName" > Last name </label>
                            <input type="text" placeholder="" name="lastName" onChange={handleChange}/>
                        </div>  
                                </>
                            )
                        }

                        <div className={styles.inputContainer}>    
                            <label for="email" > Email </label>
                            <input type="email" placeholder="Your email" name="email" onChange={handleChange}/>
                        </div>

                        <div className={styles.inputContainer}>    
                            <label for="password" > Password </label>
                            <input type="password" placeholder="" name="password" onChange={handleChange}/>
                        </div>

                        {isSignUp  &&(
                            <>
                        <div className={styles.inputContainer}>    
                            <label for="confirmPassword" > Confirm password </label>
                            <input type="password" placeholder="" name="confirmPassword" onChange={handleChange}/>
                        </div>

                        <div className={styles.inputContainer}>      
                            <label for="group" > Group </label>
                            <select onChange={handleChange} name="group">
                                <option>Select group:</option>
                                <option value="A" >A</option>
                                <option value="B" >B</option>
                                <option value="E" >E</option>
                            </select>
                        </div>
                            </>
                        )}
                        
                        <button  type="submit" className={styles.button}>{isSignUp ? "Sign Up" : "Log In"}</button>
                        
                        {isSignUp ? (
                        <p>Already have an account? <a className={styles.loginLink} onClick={switchMode}>Login here</a></p>
                        ): <p>Don't have an account? <a className={styles.loginLink} onClick={switchMode}>Sign up here</a></p>}

                    </form>
                </div>
        </div>
        </>
    );
};

export default Auth;

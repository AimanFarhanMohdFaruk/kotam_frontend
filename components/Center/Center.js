import styles from "./center.module.css"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../../lib/auth";


const Center = () => {
    

    const [ isSignedIn, setIsSignedIn ] = useState(false)

  return (

    <div className={styles.centerContainer}>

        <div className={styles.headerSection} >
            <div className={styles.welcomeSection}>
                <p>Good morning</p>
                <h1>Welcome Players</h1>
            </div>
            
            <div className={styles.userSection}>
                <p>Tuesday 25 Jan, 2022</p>
                {isSignedIn === true ? (
                <div className={styles.userDetails} >
                    <Image src="/mock-avatar.png"  width="50" height="50" />
                    <p>Jeje Lena</p>
                    <button onClick={() => {}} className={styles.signOutButton}>Sign Out</button>
                </div>) : 
                (
                    <Link href="/auth"><button  className={styles.signInButton}>Sign In</button></Link>)}
            </div>
        </div>

        <div className={styles.contentSection} >
            <h1>Matches Section</h1>
        </div>
    </div>


    
  )
  
};

export default Center;

import styles from "./center.module.css"
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


const Center = () => {
    const [loggedIn,setLoggedIn] = useState(false)


  return (


    <div className={styles.centerContainer}>

        <div className={styles.headerSection} >
            <div className={styles.welcomeSection}>
                <p>Good morning</p>
                <h1>Welcome Players</h1>
            </div>
            
            <div className={styles.userSection}>
                <p>Tuesday 25 Jan, 2022</p>
                {loggedIn ? (
                <div className={styles.userDetails} >
                    <Image src="/mock-avatar.png"  width="50" height="50" />
                    <p>Jeje Lena</p>
                </div>) : 
                (
                    <Link href="/auth"><button>Sign In</button></Link>)}
            </div>
        </div>

        <div className={styles.contentSection} >
            <h1>Matches Section</h1>
        </div>
    </div>


    
  )
  
};

export default Center;

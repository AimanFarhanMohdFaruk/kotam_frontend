import styles from "./sidebar.module.css"
import { CalendarIcon, HomeIcon, ViewListIcon } from "@heroicons/react/outline"
import Image from 'next/image'
import Link from 'next/link'

const SideBar = () => {


    return(
        <>
        <div className={styles.sideBar}>
            
            <div className={styles.logoSection}>
                <Image src="/tennis.png" alt="me" width="40" height="40"/>
                <h2>Kotam</h2>
            </div>
            
            <nav className={styles.nav}>
                    <button className={styles.navItem}>
                        <HomeIcon className={styles.navItemImg}/>
                        <p>Dashboard</p>
                    </button>
                    <button className={styles.navItem}>
                        <CalendarIcon className={styles.navItemImg}/>
                        <p>Matches</p>
                    </button>
                    <button className={styles.navItem}>
                        <ViewListIcon className={styles.navItemImg}/>
                        <p>Standings</p>
                    </button>
            </nav>

            <div className={styles.sidebarFooter}>
                <p>Created by Jeje Lena</p>
            </div>

        </div>
        </>
    )
}


export default SideBar;
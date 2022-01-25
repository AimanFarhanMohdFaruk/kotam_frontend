import styles from "./sidebar.module.css"



const SideBar = () => {


    return(
        <>
        <div className={styles.sideBar}>
            <div class="logo">
                <img src="../../public/images/tennis.png"/>
            </div>
        <nav class="nav">
            <li class="nav-item" ><a href="" class="nav-link"></a>Home</li>
            <li class="nav-item" ><a href="" class="nav-link"></a>Matches</li>
            <li class="nav-item" ><a href="" class="nav-link"></a>Standings</li>
        </nav>

            <div class="sidebar-footer">
                <p>Created by Jeje Lena</p>
            </div>
        </div>
        </>
    )
}


export default SideBar;
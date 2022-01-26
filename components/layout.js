import styles from "./layout.module.css"
import SideBar from "./Sidebar/Sidebar";


const Layout = ({children}) => {
  return (
  
  <>
    <div className={styles.mainContainer}>
    <SideBar/>
        <main className={styles.contentContainer}>{children}</main>
    </div>
  </>
  
  );
};


export default Layout;
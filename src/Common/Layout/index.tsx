import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import { TopNav } from "./TopNav";

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.sidebar}>
        <TopNav />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

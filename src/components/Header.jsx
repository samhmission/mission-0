import { useState } from "react";
import styles from "./Header.module.css";
import BrandLogo from "../assets/digiNews.jpg";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.header}>
      <div className={styles.brandContainer}>
        <div className={styles.logoContainer}>
          <img
            className={styles.brandLogo}
            src={BrandLogo}
            alt="Digi News Logo"
          />
        </div>
        <div className={styles.brandName}>DiGi News</div>
      </div>
      <nav className={styles.navContainer}>
        <div>News</div>
        <div>Blogs</div>
        <div>Events</div>
        <div className={styles.loginBtn}>Login</div>
      </nav>
      <nav className={styles.mobileNavMenu} onClick={toggleMobileMenu}>
        <RxHamburgerMenu size={30} />
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={styles.mobileNavLinks}>
          <div className={styles.mobileNavBtn}>News</div>
          <div className={styles.mobileNavBtn}>Blogs</div>
          <div className={styles.mobileNavBtn}>Events</div>
          <div className={`${styles.loginBtn} ${styles.mobileNavBtn}`}>
            Login
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;

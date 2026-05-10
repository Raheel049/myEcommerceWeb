import React from "react";
import styles from "./Navbar.module.css";
import {
  Search,
  ShoppingCart,
  User,
  Package,
  Globe,
  Smartphone,
  Laptop,
  Tv,
  Microwave,
  Gamepad2,
  Camera,
  Home,
  Watch,
  Percent,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {/* Top Row: Logo, Search, Actions */}
      <div className={styles.navbarTop}>
        <div className={styles.logo}>SHOPLY</div>

        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products, brands, categories..."
            className={styles.searchInput}
          />
          <button className={styles.searchButton}>
            <Search size={20} />
          </button>
        </div>

        <div className={styles.iconGroup}>
          <div className={styles.iconItem}>
            <Globe size={22} />
            <span className={styles.iconLabel}>Language</span>
          </div>
          <div className={styles.iconItem}>
            <User
              size={22}
              onClick={() => {
                navigate("/authPages/Login");
              }}
            />
            <span className={styles.iconLabel}>Sign In</span>
          </div>
          <div className={styles.iconItem}>
            <Package size={22} />
            <span className={styles.iconLabel}>Orders</span>
          </div>
          <div className={`${styles.iconItem} styles.cartContainer`}>
            <ShoppingCart size={22} />

            <span className={styles.badge}>2</span>
            <span className={styles.iconLabel}>Cart</span>
          </div>
        </div>
      </div>

      {/* Bottom Row: Categories */}
      <nav className={styles.navbarBottom}>
        <a href="#home" className={styles.navLink}>
          <Home size={16} /> HOME
        </a>
        <a href="#mobiles" className={styles.navLink}>
          <Smartphone size={16} /> MOBILES
        </a>
        <a href="#laptops" className={styles.navLink}>
          <Laptop size={16} /> LAPTOPS
        </a>
        <a href="#tv" className={styles.navLink}>
          <Tv size={16} /> AUDIO
        </a>
        <a href="#appliances" className={styles.navLink}>
          <Microwave size={16} /> APPLIANCES
        </a>
        <a href="#gaming" className={styles.navLink}>
          <Gamepad2 size={16} /> GAMING
        </a>
        <a href="#cameras" className={styles.navLink}>
          <Camera size={16} /> CAMERAS
        </a>
        <a href="#wearables" className={styles.navLink}>
          <Watch size={16} /> WEARABLES
        </a>
        <a href="#deals" className={styles.navLink}>
          <Percent size={16} /> DEALS
        </a>
      </nav>
    </header>
  );
};

export default Navbar;

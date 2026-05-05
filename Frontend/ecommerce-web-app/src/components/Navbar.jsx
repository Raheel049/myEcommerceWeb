import React from "react";
import styles from "./Navbar.module.css";


const Navbar = () => {
    return(
        <div>
            <section>
                <main>
                    <div className={styles.navbar}>
                        <div className={styles.navbarOne}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className={styles.navbarTwo}>

                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Navbar;
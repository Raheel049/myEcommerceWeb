import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Menu, Search, Plus, Bell, UserCircle, LogOut, X } from 'lucide-react';
import styles from './AdminNavbar.module.css';
import { adminNavItems } from '../../data/adminNavData'; // Object array for mapping

const AdminNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className={styles.navbar}>
      <div className={styles.navContent}>
        {/* Left Side: Menu Icon & Logo */}
        <div className={styles.leftGroup}>
          <motion.div 
            whileTap={{ scale: 0.9 }} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={styles.menuBtn}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
          <h2 className={styles.logo} onClick={() => navigate('/admin')}>
            SHOPLY <span>ADMIN</span>
          </h2>
        </div>

        {/* Center: Search */}
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input type="text" placeholder="Search products, orders..." />
        </div>

        {/* Right Side: Actions */}
        <div className={styles.rightGroup}>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.addBtn}
            onClick={() => navigate('/admin/add-product')}
          >
            <Plus size={18} /> Add New Product
          </motion.button>
          <div className={styles.iconGroup}>
            <Bell size={20} />
            <UserCircle size={24} />
            <LogOut size={20} className={styles.logout} />
          </div>
        </div>
      </div>

      {/* Collapsible Sidebar (Framer Motion) */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className={styles.sidebar}
          >
            {adminNavItems.map((item) => (
              <motion.div 
                key={item.id}
                whileHover={{ x: 10, backgroundColor: '#333' }}
                className={styles.sidebarItem}
                onClick={() => { navigate(item.path); setIsMenuOpen(false); }}
              >
                <item.icon size={20} />
                <span>{item.pageName}</span>
              </motion.div>
            ))}
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default AdminNavbar;
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Package, 
  ArrowUpRight, 
  MoreHorizontal 
} from 'lucide-react';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  // Stats Data
  const stats = [
    { label: 'Total Sales', val: 'Rs. 1,250,000', icon: TrendingUp, color: '#06b6d4', growth: '+12.5%' },
    { label: 'Total Orders', val: '345', icon: ShoppingCart, color: '#3b82f6', growth: '+5.2%' },
    { label: 'New Customers', val: '89', icon: Users, color: '#10b981', growth: '+8.7%' },
    { label: 'Products in Stock', val: '1,203', icon: Package, color: '#f59e0b', growth: 'Stable' }
  ];

  // Recent Orders Dummy Data
  const recentOrders = [
    { id: '#12345', customer: 'Raheel Ahmed', product: 'Samsung S24', price: 'Rs. 345k', status: 'Pending' },
    { id: '#12344', customer: 'Sarah Khan', product: 'MacBook Air M3', price: 'Rs. 420k', status: 'Delivered' },
    { id: '#12343', customer: 'Zaid Malik', product: 'Sony Headphones', price: 'Rs. 85k', status: 'Shipped' },
  ];

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className={styles.container}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* 1. Header Section */}
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard Overview</h1>
        <p className={styles.subtitle}>Welcome back! Here is what's happening today.</p>
      </div>

      {/* 2. Metrics Grid */}
      <div className={styles.statsGrid}>
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            variants={itemVariants}
            whileHover={{ y: -5, borderColor: stat.color }}
            className={styles.statCard}
          >
            <div className={styles.cardTop}>
              <div className={styles.iconBox} style={{ backgroundColor: `${stat.color}20` }}>
                <stat.icon size={22} style={{ color: stat.color }} />
              </div>
              <span className={styles.growth}>
                <ArrowUpRight size={14} /> {stat.growth}
              </span>
            </div>
            <div className={styles.cardBody}>
              <span className={styles.label}>{stat.label}</span>
              <h3 className={styles.value}>{stat.val}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. Middle Section: Chart & Top Selling */}
      <div className={styles.middleGrid}>
        <motion.div variants={itemVariants} className={styles.chartArea}>
          <div className={styles.areaHeader}>
            <h3>Sales Analytics</h3>
            <select className={styles.dropdown}>
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          {/* Visualizing the Graph as requested */}
          <div className={styles.visualGraph}>
            <div className={styles.gridLines}>
              {[...Array(5)].map((_, i) => <div key={i} className={styles.line} />)}
            </div>
            <motion.svg className={styles.svgLine} viewBox="0 0 500 100">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,80 Q50,70 100,40 T200,60 T300,20 T400,50 T500,10"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
              />
            </motion.svg>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className={styles.topSelling}>
          <h3>Top Categories</h3>
          <div className={styles.categoryList}>
            <div className={styles.catItem}><span>Mobiles</span> <div className={styles.bar} style={{width: '90%'}} /></div>
            <div className={styles.catItem}><span>Laptops</span> <div className={styles.bar} style={{width: '70%'}} /></div>
            <div className={styles.catItem}><span>Gadgets</span> <div className={styles.bar} style={{width: '45%'}} /></div>
          </div>
        </motion.div>
      </div>

      {/* 4. Recent Orders Table */}
      <motion.div variants={itemVariants} className={styles.tableSection}>
        <div className={styles.tableHeader}>
          <h3>Recent Orders</h3>
          <button className={styles.viewAll}>View All</button>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order, i) => (
              <tr key={i}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.product}</td>
                <td>{order.price}</td>
                <td>
                  <span className={`${styles.status} ${styles[order.status.toLowerCase()]}`}>
                    {order.status}
                  </span>
                </td>
                <td><MoreHorizontal size={18} className={styles.moreIcon} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
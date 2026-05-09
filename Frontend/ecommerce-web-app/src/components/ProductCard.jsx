import React from "react";
import styles from "./ProductCard.module.css";
import { ShoppingCart, Heart, Star } from "lucide-react";
// import mobileImg from "../assets/OIP.jpeg"

const ProductCard = ({ product }) => {
  // Dummy data if props not passed
  // const data = product || {
  //   title: "Samsung Galaxy S24 Ultra - 512GB Titanium Gray",
  //   price: 345000,
  //   category: "Mobiles",
  //   image : mobileImg,
  //   discount: "10%"
  // };

  return (
    <div className={styles.mainContainer}>
      {product.map((data, index) => (
      <div className={styles.card} key={index}>
        <div className={styles.imageContainer}>
          <img
            src={data.image}
            alt={data.title}
            className={styles.productImage}
          />
        </div>

        <div className={styles.details}>
          <span className={styles.category}>{data.category}</span>
          <h3 className={styles.title}>{data.title}</h3>

          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>Rs. {data.price}</span>
            <span className={styles.oldPrice}>Rs. {data.oldPrice}</span>
            <span className={styles.discountBadge}>{data.discount} OFF</span>
          </div>

          <div className={styles.actions}>
            <button className={styles.addToCartBtn}>
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className={styles.wishlistBtn}>
              <Heart size={18} />
            </button>
          </div>
        </div>
      </div>
      ))
    }
    </div>
  );
};

export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Navbar from "../../components/Navbar";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./Home.module.css";

import img1 from "../../assets/sliderMobileImg.jpg"
import img2 from "../../assets/aiBudsImg.jpg"
import img3 from "../../assets/sliderBasketImg.jpg"
import img4 from "../../assets/shopingBag.png"



const Home = () => {
  const sliderImages = [
    { url: img1, title: "Next-Gen Smartphones", sub: "Experience the future today." },
    { url: img2, title: "Premium Audio", sub: "Immerse yourself in sound." },
    { url: img3, title: "Luxury Shopping", sub: "Style that defines you." },
    { url: img4, title: "Preious Bags", sub: "Make Looks Better."}
  ];

  return (
    <div className={styles.homeContainer}>
      {/* Navbar yahan pehle wala hi rahega */}
        <Navbar />
      {/* Slider Section */}
      <section className={styles.sliderSection}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect={"fade"} // Smooth transition ke liye
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation={true}
          loop={true}
          className={styles.mySwiper}
        >
          {sliderImages.map((slide, index) => (
            <SwiperSlide key={index}>
              <div 
                className={styles.slideItem} 
                style={{ backgroundImage: `url(${slide.url})` }}
              >
                <div className={styles.slideContent}>
                  <h2>{slide.title}</h2>
                  <p>{slide.sub}</p>
                  <Link to="/products" className={styles.shopNowBtn}>Shop Now</Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Baqi Hero Section aur Features neeche aayenge */}
    </div>
  );
};


export default Home;





import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Navbar from "../../components/Navbar";
import ProductCard from "../../components/ProductCard";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import styles from "./Home.module.css";

import img1 from "../../assets/sliderMobileImg.jpg"
import img2 from "../../assets/aiBudsImg.jpg"
import img3 from "../../assets/sliderBasketImg.jpg"
import img4 from "../../assets/shopingBag.png"
// import { toast } from "react-toastify";
// import axiosInstance from "../../utiles/axiosInstance";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../features/product/productSlice";
import Loader from "../../components/Loader";



const Home = () => {
  const sliderImages = [
    { url: img1, title: "Next-Gen Smartphones", sub: "Experience the future today." },
    { url: img2, title: "Premium Audio", sub: "Immerse yourself in sound." },
    { url: img3, title: "Luxury Shopping", sub: "Style that defines you." },
    { url: img4, title: "Preious Bags", sub: "Make Looks Better."}
  ];

  // const [products, setProducts] = useState([]);

  // const fetchAllProducts = async () => {
  //   try {
  //     const response = await axiosInstance.get("/admin/all-products");
  //     if(response.data.status == true || response.data.status === 200){
  //       setProducts(response.data.data)
  //       console.log("products are fetches successfully",response.data.data);
  //     }
  //   } catch (error) {
  //     toast.error(error.message || "Some thing went wrong");
  //   }
  // }

  // console.log("product",products)

  const {products, loading} = useSelector((state) => state.product);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  },[dispatch])

  return (
    <div className={styles.homeContainer}> {loading ? <Loader /> : ""}
      {/* Navbar yahan pehle wala hi rahega */}
        <Navbar />
      {/* Slider Section */}
      <section className={styles.sliderSection}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          effect={"fade"} // Smooth transition ke liye
          autoplay={{ delay: 2000 }}
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
          
          <ProductCard product= {products} />
      {/* Baqi Hero Section aur Features neeche aayenge */}
      <Footer />
    </div>
  );
};


export default Home;





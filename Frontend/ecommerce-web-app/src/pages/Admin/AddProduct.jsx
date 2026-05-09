import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { addProduct, resetStatus } from '../../features/product/productSlice.js';
import { Upload, X, PackagePlus, Loader2 } from 'lucide-react';
import styles from './AddProduct.module.css';
import { toast } from 'react-toastify';

const AddProduct = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    oldPrice: '',
    discount: '',
    category: 'Mobiles',
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Image Selection
  const handleImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.price);
    data.append('discount', formData.discount);
    data.append('category', formData.category);
    data.append('oldPrice', formData.oldPrice);
    if (image) data.append('image', image);

    dispatch(addProduct(data));
  };

  useEffect(() => {
    if (success) {
      toast.success("Product Added Successfully!");
      setFormData({ title: '', description: '', price: '', discount: '', category: 'Mobiles', oldPrice: "" });
      setImage(null); setPreview(null);
      dispatch(resetStatus());
    }
  }, [success, dispatch]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
      className={styles.container}
    >
      <div className={styles.formHeader}>
        <PackagePlus size={30} color="#06b6d4" />
        <h2>Add New Inventory Item</h2>
      </div>

      <form onSubmit={handleSubmit} className={styles.productForm}>
        <div className={styles.mainGrid}>
          {/* Left Column: Details */}
          <div className={styles.detailsSection}>
            <div className={styles.inputGroup}>
              <label>Product Title</label>
              <input name="title" value={formData.title} onChange={handleChange} required placeholder="e.g. iPhone 15 Pro Max" />
            </div>

            <div className={styles.inputGroup}>
              <label>Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows="5" placeholder="Detail specifications here..." />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label>Price (Rs.)</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
              </div>
              <div className={styles.inputGroup}>
                <label>Discount (%)</label>
                <input type="number" name="discount" value={formData.discount} onChange={handleChange} />
              </div>
            </div>

            <div className={styles.inputGroup}>
                <label>Old Price</label>
                <input type="number" name="oldPrice" value={formData.oldPrice} onChange={handleChange} required />
              </div>
          </div>

          {/* Right Column: Image & Category */}
          <div className={styles.assetSection}>
            <div className={styles.inputGroup}>
              <label>Category</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Mobiles">Mobiles</option>
                <option value="Laptops">Laptops</option>
                <option value="Gadgets">Gadgets</option>
              </select>
            </div>

            <label className={styles.uploadBox}>
              {!preview ? (
                <div className={styles.uploadPlaceholder}>
                  <Upload size={40} />
                  <span>Click to Upload Product Image</span>
                </div>
              ) : (
                <div className={styles.previewContainer}>
                  <img src={preview} alt="Preview" />
                  <button type="button" className={styles.removeImg} onClick={() => {setImage(null); setPreview(null)}}>
                    <X size={16} />
                  </button>
                </div>
              )}
              <input type="file" hidden onChange={handleImage} accept="image/*" />
            </label>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className={styles.submitBtn} disabled={loading}
            >
              {loading ? <Loader2 className={styles.spinner} /> : "Publish Product"}
            </motion.button>
            {error && <p className={styles.errorText}>{error}</p>}
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default AddProduct;
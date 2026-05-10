import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Product description is required"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required"]
    },
    oldPrice: {
        type: Number,
        required: [true, "Product price is required"]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
        enum: ["Mobiles", "Laptops", "Audio", "Appliances", "Gaming", "Cameras", "Wearables"] 
    },
    image: {
        type: String,
        required: [true, "Product image URL is required"]
    },
    public_id: {
        type: String,
        required: [true, "Cloudinary public_id is required"]
    },
    stock: {
        type: Number,
        default: 10
    },
    ratings: {
        type: Number,
        default: 0
    }
}, { 
    timestamps: true // Isse 'createdAt' aur 'updatedAt' automatically ban jayenge
});

const Product = mongoose.model('Product', productSchema);

export default Product;
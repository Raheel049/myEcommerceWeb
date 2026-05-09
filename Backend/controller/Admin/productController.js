import Product from '../../models/adminModels/product.js';
import cloudinary from '../../config/cloudnary.js';

/**
 * @desc    Create new product with image upload
 * @route   POST /api/product/add
 * @access  Private/Admin
 */
export const addProduct = async (request, response) => {
  try {
    // 1. request.body se text data nikalna
    const { title, description, price, oldPrice, discount, category } = request.body;

    console.log("api key",cloudinary.config().api_key);
    // 2. Validation: Check agar image file request mein majood hai
    if (!request.file) {
      return response.status(400).json({ 
        status: false, 
        message: "Image file is required. Please upload a product image." 
      });
    }

    // 3. Image buffer ko base64 string mein convert karna (Cloudinary upload ke liye)
    const fileBase64 = `data:${request.file.mimetype};base64,${request.file.buffer.toString('base64')}`;
    
    // 4. Cloudinary par image upload ki request bhejna
    const uploadResponse = await cloudinary.uploader.upload(fileBase64, {
      folder: 'shoply_products',
      resource_type: 'auto' // Images aur videos dono ke liye flexible
    });

    // 5. Database mein product save karne ki request
    const newProduct = await Product.create({
      title,
      description,
      price: Number(price),
      discount: Number(discount) || 0,
      oldPrice: Number(oldPrice),
      category,
      image: uploadResponse.secure_url, // Cloudinary se mila hua URL
      public_id: uploadResponse.public_id // Future mein delete karne ke liye zaroori hai
    });

    // 6. Final success response client ko bhejna
    return response.status(201).json({
      success: true,
      message: "Product added successfully!",
      data: newProduct
    });

  } catch (error) {
    // 7. Error handling agar koi issue aata hai
    console.error("Internal Server Error:", error);
    return response.status(500).json({
      status: false,
      message: "An internal server error occurred while adding the product.",
      error: error.message
    });
  }
};


export const fetchAllProducts = async (request, response) => {
    try {
        const allProducts = await Product.find();

        if(!allProducts){
          return response.status(404).json({
                message : "Products Not found",
                data : allProducts,
                status : false
            })
        }

        response.status(200).json({
            message : "Products found Successfully",
            data : allProducts,
            status : true
        })
    } catch (error) {
        return response.status(500).json({
            status: false,
            message: "An internal server error occurred while adding the product.",
            error: error.message
          });
    }
}
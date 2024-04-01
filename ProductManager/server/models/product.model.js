//st4

const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minLength: [3, "Title must be at least 3 characters long"]
    },
  
    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [10, "Price must be at least 10"]
    },
 
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [3, "description must be at least 3 characters long"]
    }
}, {
    timestamps: true // Corrected to timestamps (lowercase 's')
});

const ProductManager = mongoose.model('ProductManager', ProductManagerSchema);
module.exports = ProductManager; // Exporting the Book model
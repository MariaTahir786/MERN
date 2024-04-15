
const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, "Store name is required"],
        minLength: [3, "Name must contain at least 3 characters!"]
    },
    storeNumber: {
        type: Number,
        required: [true, "Store number is required"],
        min: [1, "Must be a unique number greater than 0"]
    },
    open: {
        type: Boolean,
        default: false

    }
}, {
    timestamps: true
});

const Store = mongoose.model('Store', StoreSchema);
module.exports = Store; 
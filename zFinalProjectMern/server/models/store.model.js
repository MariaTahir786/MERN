//st4

const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name mus contain 3 characters!"]
    },
    storeNumber: {
        type: String,
        required: [true, "Author is required"],
        minLength: [2, "Must be Unique number greater than 3 "]
    },
    open: {
        type: Boolean,
        required: [true, "CheckBox is required"]

    }
}, {
    timestamps: true // Corrected to timestamps (lowercase 's')
});

const Store = mongoose.model('Store', StoreSchema);
module.exports = Store; // Exporting the Book model
const mongoose = require("mongoose")
const countrieSchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true
    },
    countryId: {
        type: Number,
    }
}, { timestamps: true });
module.exports = mongoose.model("Countries", countrieSchema)
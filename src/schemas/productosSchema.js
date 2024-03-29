import mongoose from "mongoose"

const productosSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        required: true
    }
})
export default productosSchema
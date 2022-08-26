import mongoose from "mongoose"

const msjSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
})
export default msjSchema
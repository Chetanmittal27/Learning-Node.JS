import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    quantity: {
        type: Number,
        required: true,
    }
})
const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: Number,
            required: true,
            default: 0
        },

        customer: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },

        orderItems: {
            type: [orderItemSchema]
        }
    } , {timestamps: true});

export const Order = mongoose.model("Order" , orderSchema);
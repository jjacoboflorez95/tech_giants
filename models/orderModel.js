import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
	{
		date: { type: String, required: true },
		quantity: { type: Number, required: true },
		total_price: { type: Number, required: true },
		status: { type: Number, required: true, default: 0 },
		customer_id: { type: String, required: true },
		employee_id: { type: String, required: true },
		product_id: { type: String, required: true },
	},
	{ collection: "order" }
);

const orderModel = mongoose.model("order", orderSchema);

export default orderModel;

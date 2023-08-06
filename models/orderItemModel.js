import mongoose from "mongoose";

const orderItemSchema = mongoose.Schema(
	{
		quantity: { type: Number, required: true },
		total_price: { type: Number, required: true },
		order_header_id: { type: String, required: true },
		product_id: { type: String, required: true },
	},
	{ collection: "order_item" }
);

const orderItemModel = mongoose.model("order_item", orderItemSchema);

export default orderItemModel;

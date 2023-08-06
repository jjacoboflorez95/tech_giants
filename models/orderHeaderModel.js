import mongoose from "mongoose";

const orderHeaderSchema = mongoose.Schema({
	date: { type: String, required: true },
	status: { type: Number, required: true },
	customer_id: { type: String, required: true },
	employee_id: { type: String, required: true },
});

const orderHeaderModel = mongoose.model("order_header", orderHeaderSchema);

export default orderHeaderModel;

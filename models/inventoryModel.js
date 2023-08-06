import mongoose from "mongoose";

const invetorySchema = mongoose.Schema({
	quantity: { type: Number, required: true },
	product_id: { type: String, required: true },
});

const inventoryModel = mongoose.model("inventory", invetorySchema);

export default inventoryModel;

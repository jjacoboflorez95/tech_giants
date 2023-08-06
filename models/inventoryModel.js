import mongoose from "mongoose";

const invetorySchema = mongoose.Schema(
	{
		quantity: { type: Number, required: true },
		product_id: { type: String, required: true },
	},
	{ collection: "inventory" }
);

const inventoryModel = mongoose.model("inventory", invetorySchema);

export default inventoryModel;

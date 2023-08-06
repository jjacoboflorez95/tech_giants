import mongoose from "mongoose";

const employeeSchema = mongoose.Schema({
	identification: { type: String, required: true },
	first_name: { type: String, required: true },
	middle_name: { type: String, required: true },
	last_name: { type: String, required: true },
	salary: { type: Number, required: true },
	type: { type: String, required: true },
});

const employeeModel = mongoose.model("employee", employeeSchema);

export default employeeModel;

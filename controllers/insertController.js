import customerModel from "../models/customerModel.js";
import employeeModel from "../models/employeeModel.js";
import orderHeaderModel from "../models/orderHeaderModel.js";

class InsertController {
	static insert_get = (req, res) => {
		res.render("insert.ejs");
	};

	static insert_post = async (req, res) => {
		console.log("insert_post");
		try {
			const form_data = req.body;
			console.log("form data: ", form_data);

			const customer_to_save = new customerModel({
				identification: form_data.identification,
				first_name: form_data.first_name,
				middle_name: form_data.middle_name,
				last_name: form_data.last_name,
				address: {
					address: form_data.address,
					city: form_data.city,
					province: form_data.province,
					country: form_data.country,
					zip_code: form_data.zip_code,
				},
				dob: form_data.dob,
				email: form_data.email,
				phone: form_data.phone,
			});

			const customer_saved_in_db = await customer_to_save.save();
			const employee_from_db = await employeeModel.find().limit(1);

			const order_header_to_save = new orderHeaderModel({
				date: form_data.dob,
				customer_id: customer_saved_in_db._id,
				employee_id: employee_from_db[0]._id,
			});

			const order_header_saved_in_db = await order_header_to_save.save();
			console.log("----------------------------------------------------");
			console.log("");
			res.render("insert.ejs");
		} catch (error) {
			console.log(error);
		}
	};
}

export default InsertController;

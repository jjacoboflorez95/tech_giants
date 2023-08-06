import customerModel from "../models/customerModel.js";

class InsertController {
	static insert_get = (req, res) => {
		res.render("insert.ejs");
	};

	static insert_post = (req, res) => {
		const form_data = req.body;
		console.log("form data: ", form_data);

		res.render("insert.ejs");
	};
}

export default InsertController;

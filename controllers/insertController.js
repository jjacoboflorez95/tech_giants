import customerModel from "../models/customerModel.js";

class InsertController {
	static insert_get = (req, res) => {
		res.render("insert.ejs");
	};
}

export default InsertController;

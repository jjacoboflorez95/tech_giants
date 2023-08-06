class UpdateController {
	static update_get = (req, res) => {
		res.render("update.ejs", {
			userFound: false,
		});
	};
}

export default UpdateController;

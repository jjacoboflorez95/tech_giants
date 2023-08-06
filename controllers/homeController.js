class HomeController {
	static home_get = (req, res) => {
		res.render("home.ejs");
	};
}

export default HomeController;

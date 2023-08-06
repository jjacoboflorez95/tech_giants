import express from "express";

import HomeController from "../controllers/homeController.js";
import InsertController from "../controllers/insertController.js";
import UpdateController from "../controllers/updateController.js";
import ReportsController from "../controllers/reportsController.js";

const router = express.Router();

router.get("/", HomeController.home_get);

router.get("/home", HomeController.home_get);

router.get("/insert", InsertController.insert_get);

router.post("/insert", InsertController.insert_post);

router.get("/update", UpdateController.update_get);

router.post("/update_search", UpdateController.update_search_post);

router.post("/update_found", UpdateController.update_found_post);

router.get("/reports", ReportsController.reports_get);

export default router;

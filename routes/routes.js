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

router.get("/reports", ReportsController.reports_get);

export default router;

import express from "express";
import { explorePopularRepos } from "../controllers/explore.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthneticated.js";

const router = express.Router();

router.get("/repos/:language", ensureAuthenticated, explorePopularRepos);

export default router;
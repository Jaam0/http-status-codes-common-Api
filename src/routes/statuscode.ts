import { Router } from "express";
import HttpStatusCodesCommonController from "../controllers/http-status-codes-common.controller";

const router = Router();

router.get("/", HttpStatusCodesCommonController.showAllStatusCodes);

export { router };

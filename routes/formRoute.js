import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import { createForm } from "../controllor/formControllor.js";
const router = express.Router();

 router.post("/create",isAuthenticated,createForm)

export default router;

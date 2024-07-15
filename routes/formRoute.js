import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  createForm,
  getFormByIdFunction,
  getFormFunction,
} from "../controllor/formControllor.js";
const router = express.Router();

router.post("/create", isAuthenticated, createForm);
router.get("/get", getFormFunction);
router.get("/get/:id", getFormByIdFunction);

export default router;

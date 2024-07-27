import express from "express";
import { isAuthenticated } from "../middleware/auth.js";
import {
  createForm,
  getFormByIdFunction,
  getFormFunction,
  updateFormFunction,
  updateFormPublishFunction,
} from "../controllor/formControllor.js";
const router = express.Router();

router.post("/create", isAuthenticated, createForm);
router.get("/get", getFormFunction);
router.get("/get/:id", getFormByIdFunction);
router.patch("/update/:id", isAuthenticated, updateFormFunction);
router.patch("/publish/:id", isAuthenticated, updateFormPublishFunction);

export default router;

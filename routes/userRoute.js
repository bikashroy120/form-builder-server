import express from "express"
import { deleteUser, getAllUser, getOneUser, logoutUser, regesterControllor, updatePassword, updateToken, updateUser, updaterUserRoll, userLogin, verifyUser } from "../controllor/userControllor.js"
import { isAdmin, isAuthenticated } from "../middleware/auth.js";
const router = express.Router()
 
router.post("/regester",regesterControllor);
router.post("/activate-user",verifyUser);
router.post("/login",userLogin);
router.get("/logout",isAuthenticated,logoutUser);
router.get("/refresh-token",updateToken);
router.get("/me",isAuthenticated,getOneUser);
router.get("/users",isAuthenticated,getAllUser)
router.post("/update-password",isAuthenticated,updatePassword);
router.put("/update-user",isAuthenticated,updateUser);
router.put("/update-role",isAuthenticated,updaterUserRoll)
router.delete("/delete-user/:id",isAuthenticated,deleteUser)

export default router



import jwt from "jsonwebtoken";
import ErrorHandler from "../utils/ErrorHandlers.js";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import dotenv from "dotenv";
dotenv.config();
// import { redis } from "../utils/redis.js";
import userModal from "../models/userModel.js";


export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  try {
    let token;
    if (req?.headers?.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
      try {
        if (token) {
          /* ====verify token===== */
          const decodet = jwt.verify(token, process.env.ACCRSS_TOKEN);
          if (!decodet) {
            return next(new ErrorHandler("access token is not valid", 400));
          }

          /* ====get user by token===== */
          const user = await userModal.findById(decodet.id);
          if (!user) {
            return next(new ErrorHandler("user not found", 400));
          }
          /* ===== send user ===== */
          console.log("token ::::::", user);
          req.user = user;
          next();
        }
      } catch (error) {
        return next(new ErrorHandler(error.message, 401));
      }
    } else {
      res.status(401).json({ message: "Please login to access the recourse" });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 401));
  }
});

export const isAdmin = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = req.user;

    if (user.role !== "admin") {
      return next(new ErrorHandler("you are not admin", 400));
    }
    next();
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

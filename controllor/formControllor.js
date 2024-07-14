import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { create, getForm } from "../services/formServices/FormServices.js";
import ErrorHandler from "../utils/ErrorHandlers.js";

export const createForm = catchAsyncErrors(async (req, res, next) => {
  try {
    const { name, description, userId } = req.body;
    const data = { name, description, userId };
    const form = await create(data);

    res.status(201).json({
      status: "success",
      message: "Form create success",
      form,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const getFormFunction = catchAsyncErrors(async (req, res, next) => {
  try {
    const form = await getForm();

    console.log(form)

    res.status(200).json({
      status: "success",
      message: "Form create success",
      form,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import formModal from "../models/formModel.js";
import {
  create,
  getForm,
  getFormById,
} from "../services/formServices/FormServices.js";
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
    res.status(200).json({
      status: "success",
      message: "Form get success",
      form,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const getFormByIdFunction = catchAsyncErrors(async (req, res, next) => {
  try {
    const { id } = req.params;
    const form = await getFormById(id);
    res.status(200).json({
      status: "success",
      message: "Single form get success",
      form,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const updateFormFunction = catchAsyncErrors(async (req, res, next) => {
  try {
    const { id } = req.params;
    const { element } = req.body;
    const form = await formModal.findById(id);

    if (form) {
      form.content = element;

      const response = await form.save();

      res.status(200).json({
        message: "Form update success",
        data: response,
      });
    } else {
      res.status(404).json({
        message: "Form not found",
      });
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

export const updateFormPublishFunction = catchAsyncErrors(
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const form = await formModal.findById(id);

      if (form) {
        form.published = true;

        const response = await form.save();

        res.status(200).json({
          message: "Form publish success",
          data: response,
        });
      } else {
        res.status(404).json({
          message: "Form not found",
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
);

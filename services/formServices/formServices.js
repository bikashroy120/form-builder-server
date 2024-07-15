import formModal from "../../models/formModel.js";

export const create = async (data) => {
  const form = await formModal.create(data);
  return form;
};

export const getForm = async () => {
  const form = await formModal.find();
  return form;
};

export const getFormById = async (id) => {
  const form = await formModal.findOne({ _id: id });
  return form;
};

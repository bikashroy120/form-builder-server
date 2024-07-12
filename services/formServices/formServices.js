import formModal from "../../models/formModel.js"

export const create = async(data)=>{
    const form = await formModal.create(data)
    return form
}
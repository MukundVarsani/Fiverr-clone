import User from "../model/user.model.js";
import createError from "../utils/createError.js";


const deletuser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (req.userId !== user._id.toString()) {
    return next(createError(401, "you can delete only your account"))
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(200).send("Deleted");
};
export default deletuser;

export const getUser = async (req, res) => {

  const user = await User.findById(req.params.id);
  const {password , ...info} = user._doc;
  // console.log(info);
  res.status(200).send(info);
};


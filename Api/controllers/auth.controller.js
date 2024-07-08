import User from "../model/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 4);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been created");
    return;
  } catch (error) {
   
    return  next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));
    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(402, "Wrong password"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_TOKEN
    );

    const { password, ...info } = user._doc;

    res.cookie("accessToken", token, { httpOnly: true }).status(200).send(info);
  } catch (error) {
    next(err);
  }
};

export const logout = async (req, res) => {
    res
        .clearCookie("accessToken" , {
            samesite : "none",
            secure : true
        })
        .status(200)
        .send("User has been loged out.")
};

export default login;

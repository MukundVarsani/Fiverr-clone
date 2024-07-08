import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const verifyToken = (req, res , next) => {
  const token = req.cookies.accessToken;

  if (!token) {
    return next(createError(401,"Your are not authenticated"))
 ;
  }
  jwt.verify(token, process.env.JWT_TOKEN, async (err, payload) => {
    if(err) return next(403 , "token is not valid");

    req.userId = payload.id;
    req.isSeller = payload.isSeller;
    next();
})

}
import { verifyToken } from "./jwtUtil.js";
import UserModel from '../model/UserModel.js'

//authentication middleware
export const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = verifyToken(token);
    const {userId}=decoded;

   const user= await UserModel.findOne({_id:userId})

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
};
import userModel from '../model/userModel.js';
import bcrypt from 'bcrypt'

//User register --user
export const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body;

        // Password hashing
    const salt = await bcrypt.genSalt(12)
    const hashedPassword = await bcrypt.hash(password, salt)

        const users=new userModel({
            name,
            email,
            password:hashedPassword,
        })
        await users.save()
        res.status(201).json({massage:"Successully registered"})
    }catch(err){
        res.status(500).json({message:"User registration is failed ..!"})
        console.log(err)
    }
}

//Login for users

export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await userModel.findOne({ email });
  
      if (user) {
        const passwordMatch = await bcrypt.compare(password, user.password);
  
        if (passwordMatch) {
          res.status(200).json({ message: "Login successful", user });
        } else {
          res.status(401).json({ message: "Incorrect email or password" });
        }
      } else {
        res.status(401).json({ message: "User not found" });
      }
    } catch (err) {
      res.status(500).json({ message: "Login failed" });
      console.error(err);
    }
  };
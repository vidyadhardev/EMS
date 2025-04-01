import User from "./models/Users.js";
import bcrypt from "bcrypt";
// import connectToDataBase from "./Db/db.js";
const userRegister = async () => {
  
  try {
    // password encripted by bcrypt
    const hashPassword = await bcrypt.hash("maurya", 10)
    //  Here User imported From Model
    const newUser = new User({
      name: "Admin",
      email: "coolMaurya@gmail.com",
      // email:"admin@gmail.com",
      password: hashPassword,
      role: "admin"
    });
    await newUser.save()
  } catch (error) {
    console.log(error);
  }
};
export default userRegister;
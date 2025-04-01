import mongoose from "mongoose";
const connectToDataBase = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/ems")
    console.log(`Database Connected .`);
  }
  catch (error) {
    console.error("Error while connecting to database:", error);
  }
}
export default connectToDataBase;
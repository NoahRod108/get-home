import mongoose from "mongoose";

// Connection variable
let con = false;

// Connect database
const connectDb = async () => {
  // Any fields in schema is saved to database
  mongoose.set("strictQuery", true);

  // If database is connected DO NOT connect again
  if (con) {
    console.log("database already connected");

    return;
  }

  // Connnect to Mongodb
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    con = true;

    console.log("Mongodb is connected!");
  } catch (error) {
    console.log(error);
  }
};

export default connectDb;

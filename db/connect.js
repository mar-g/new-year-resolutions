import mongoose from "mongoose";
//require("dotenv").config();

export default async function connectToDb() {
  // Here is where we check if there is an active connection.
  if (mongoose.connections[0].readyState) return;

  try {
    // Here is where we create a new connection.
    await mongoose.connect("mongodb://127.0.0.1:27017/messages", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database.");
  } catch (error) {
    console.log("DB error", error);
  }
}

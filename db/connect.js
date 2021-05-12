import mongoose from "mongoose";

export default async function connectToDb() {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.DB_HOST, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database.");
  } catch (error) {
    console.log("DB error", error);
  }
}

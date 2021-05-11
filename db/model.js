import mongoose from "mongoose";

const Message =
  mongoose.models.Message ||
  new mongoose.model("Message", {
    message: String,
    edit: Boolean,
  });

export default Message;

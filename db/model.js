import mongoose from "mongoose";

const Message = new mongoose.model("Message", {
  message: String,
  edit: Boolean,
});

export default Message;

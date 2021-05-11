import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/message", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Message = new mongoose.model("Message", {
  message: String,
  edit: Boolean,
});

const newMessage = new Message({
  message: "Test",
  edit: true,
});

newMessage.save();

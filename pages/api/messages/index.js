import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/messages", {
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

export default (req, res) => {
  const data = newMessage.save();
  console.log(data);
  res.status(200).send("ok");
};

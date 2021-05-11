import mongoose from "mongoose";
import Message from "../../../db/model";

// mongoose.connect("mongodb://127.0.0.1:27017/messages", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const newMessage = new Message({
//   message: "Test",
//   edit: true,
// });

export default function handler(req, res) {
  if (req.method === "GET") {
    res.send("GET messageS");
  }

  if (req.method === "POST") {
    //console.log(req);
    const message = req.body.message;
    const edit = req.body.edit;
    res.send("ADD message" + message + edit);
  }
}

// export default (req, res) => {
//   const data = newMessage.save();
//   console.log(data);
//   res.status(200).send("ok");
// };

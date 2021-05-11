import mongoose from "mongoose";
import { getMessage, delMessage } from "../../../db/actions";

mongoose.connect("mongodb://127.0.0.1:27017/messages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default function handlerID(req, res) {
  if (req.method === "GET") {
    return getMessage(req, res);
  }

  if (req.method === "DELETE") {
    return delMessage(req, res);
  }
}

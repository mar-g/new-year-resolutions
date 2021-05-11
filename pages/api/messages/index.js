import mongoose from "mongoose";
import { getMessages, saveMessage } from "../../../db/actions";

mongoose.connect("mongodb://127.0.0.1:27017/messages", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default function handler(req, res) {
  if (req.method === "GET") {
    return getMessages(req, res);
  }

  if (req.method === "POST") {
    return saveMessage(req, res);
  }
}

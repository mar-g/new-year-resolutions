import { getMessages, saveMessage } from "../../../db/actions";
import connectToDb from "../../../db/connect";

export default async function handler(req, res) {
  await connectToDb();

  if (req.method === "GET") {
    return getMessages(req, res);
  }

  if (req.method === "POST") {
    return saveMessage(req, res);
  }
}

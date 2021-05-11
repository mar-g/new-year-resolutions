import { getMessage, delMessage } from "../../../db/actions";
import connectToDb from "../../../db/connect";

export default async function handlerID(req, res) {
  await connectToDb();

  if (req.method === "GET") {
    return getMessage(req, res);
  }

  if (req.method === "DELETE") {
    return delMessage(req, res);
  }
}

export default function handlerID(req, res) {
  if (req.method === "GET") {
    const id = req.query.messageId;
    res.send("GET message " + id);
  }
  if (req.method === "DELETE") {
    const id = req.query.messageId;
    res.send("DEL message " + id);
  }
}

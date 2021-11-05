import Message from "../db/model";

export async function getMessages(req, res) {
  const data = await Message.find({});
  res.status(200).json(data);
}

export async function getMessage(req, res) {
  const id = req.query.messageId;
  const data = await Message.findOne({ _id: id });
  res.status(200).json(data);
}

export async function saveMessage(req, res) {
  const numberOfMessage = await Message.countDocuments({});
  if (numberOfMessage < 15) {
    const message = req.body.message;
    const edit = req.body.edit;
    const newMessage = new Message({ message, edit });
    await newMessage.save();
    res.status(200).json(newMessage);
  } else {
    res.status(200).send(false);
  }
}

export async function delMessage(req, res) {
  const id = req.query.messageId;
  await Message.deleteOne({ _id: id });
  res.status(204).send();
}

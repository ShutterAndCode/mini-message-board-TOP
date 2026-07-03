import { Router } from "express";

import messages from "../messages.js";

const messageRouter = Router();

messageRouter.get("/", (req, res) => {
  res.render(`form`);
});


messageRouter.post(`/`, (req, res) => {
  const newMessage = {
    user: req.body.messageUsername,
    text: req.body.messageText,
    added: new Date(),
  };
  messages.push(newMessage);
  res.redirect(`/`);
});
export default messageRouter;

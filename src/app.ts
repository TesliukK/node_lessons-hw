import express, { Request, Response } from "express";
import * as mongoose from "mongoose";

import { User } from "./models/users.model";
import {IUser} from "./types/users.types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", async (req: Request, res: Response) => {
  const users = await User.find();
  res.json(users);
});

app.get(
  "/users/:userId",
  async (req: Request, res: Response): Promise<Response<IUser>> => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    return res.json(user);
  }
);

app.post("/users", async (req, res) => {
  const body = req.body;
  const user = await User.create(body);
  res.status(201).json({
    message: "User created!",
    data: user,
  });
});
//
// app.put("/users/:userId", (req, res) => {
//   const { userId } = req.params;
//   const updatedUser = req.body;
//
//   users[+userId] = updatedUser;
//
//   res.status(200).json({
//     message: "User updated",
//     data: users[+userId],
//   });
// });
//
// app.delete("/users/:userId", (req, res) => {
//   const { userId } = req.params;
//
//   users.splice(+userId, 1);
//
//   res.status(200).json({
//     message: "User deleted",
//   });
// });

app.get("/welcome", (req, res) => {
  res.send("WELCOME");
});
const PORT = 5100;

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/user").then();
  console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});

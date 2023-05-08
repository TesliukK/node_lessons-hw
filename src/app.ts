import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { userRouter } from "./routers/user.router";
import { IError } from "./types/common.types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

const PORT = 5100;

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/sept-2022");
  console.log(`Server has started on PORT ${PORT} 🚀🚀🚀`);
});

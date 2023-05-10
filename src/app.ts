import express, { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";

import { configs } from "./configs";
import { authRouter, userRouter } from "./routers";
import { IError } from "./types";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRouter);
app.use("/auth", authRouter);

app.use((err: IError, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;

  return res.status(status).json({
    message: err.message,
    status,
  });
});

app.listen(configs.PORT, async () => {
  await mongoose.connect(configs.DB_URL);
  // eslint-disable-next-line
  console.log(`Server has started on PORT ${configs.PORT} 🚀🚀🚀`);
});

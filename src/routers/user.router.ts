import { Router } from "express";

import { userController } from "../controllers";
import { userMiddleware } from "../middlewares";

const router = Router();

router.get("/", userController.getAll);
router.post("/", userMiddleware.isValidCreate, userController.create);

router.get(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.getByIdAndThrow,
  userController.getById
);

router.put(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.isValidUpdate,
  userMiddleware.getByIdAndThrow,
  userController.update
);

router.delete(
  "/:userId",
  userMiddleware.isIdValid,
  userMiddleware.getByIdAndThrow,
  userController.delete
);
export const userRouter = router;

import { Router } from "express";

import { authController } from "../controllers";
import { userMiddleware } from "../middlewares";

const router = Router();

router.post(
  "/register",
  userMiddleware.isValidCreate,
  userMiddleware.getDynamicallyAndThrow("email", "body"),
  authController.register
);
router.post(
  "/login",
  userMiddleware.getDynamicallyOrThrow("email"),
  authController.login
);
router.post("/login");

export const authRouter = router;

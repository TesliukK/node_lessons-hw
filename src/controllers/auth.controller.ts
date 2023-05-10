import { NextFunction, Request, Response } from "express";

import { authService } from "../services";

class AuthController {
  public async register(req: Request, res: Response, next: NextFunction) {
    try {
      await authService.register(req.body);
      res.sendStatus(201);
    } catch (e) {
      next(e);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (e) {
      next(e);
    }
  }
}

export const authController = new AuthController();
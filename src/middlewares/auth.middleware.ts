import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors";
import { Token } from "../models/Token.model";

class AuthMiddleware {
  public async checkAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const accessToken = req.get("Authorization");
      if (!accessToken) {
        return next(new ApiError("No token", 401));
      }
      const tokenInfo = await Token.findById({ accessToken });

      if (!tokenInfo) {
        return next(new ApiError("Token not valid", 401));
      }
      req.res.locals = { tokenInfo };
      next();
    } catch (e) {
      next(e);
    }
  }

  public async checkRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const refreshToken = req.get("Authorization");
      if (!refreshToken) {
        return next(new ApiError("No token", 401));
      }
      const tokenInfo = await Token.findById({ refreshToken });

      if (!tokenInfo) {
        return next(new ApiError("Token not valid", 401));
      }
      req.res.locals = { tokenInfo };
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const authMiddleware = new AuthMiddleware();

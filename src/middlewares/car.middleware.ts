import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors";
import { Car } from "../models";

class CarMiddleware {
  public async getByIdAndThrow(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { carId } = req.params;

      const car = await Car.findById(carId);

      if (!car) {
        return next(new ApiError("Not found", 422));
      }
      res.locals.car = car ;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const carMiddleware = new CarMiddleware();

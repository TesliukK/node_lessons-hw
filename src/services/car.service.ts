import { Types } from "mongoose";

import { ApiError } from "../errors";
import { Car } from "../models";
import { ICar, IUser } from "../types";

class CarService {
  public async getById(id: string): Promise<IUser> {
    try {
      return Car.findById(id);
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }

  public async create(data: ICar, userId: string): Promise<any> {
    try {
      return Car.create({ ...data, user: new Types.ObjectId(userId) });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}

export const carService = new CarService();

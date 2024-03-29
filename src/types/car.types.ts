import { Types } from "mongoose";

import { IUser } from "./users.types";

export interface ICar {
  _id?: Types.ObjectId;
  brand: string;
  model: string;
  year: number;
  user: IUser | Types.ObjectId;
}

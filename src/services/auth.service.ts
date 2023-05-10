import { ApiError } from "../errors";
import { User } from "../models";
import { IUser } from "../types";
import { passwordService } from "./password.service";

class AuthService {
  public async register(body: IUser): Promise<void> {
    try {
      const { password } = body;
      const hashedPassword = await passwordService.hash(password);
      await User.create({
        ...body,
        password: hashedPassword,
      });
    } catch (e) {
      throw new ApiError(e.message, e.status);
    }
  }
}
export const authService = new AuthService();

import * as jwt from "jsonwebtoken";

class TokenService {
  public async generateTokenPair(payload: Record<string, any>) {
    const accessToken = jwt.sign(payload, "JWT_ACCESS_SECRET", {
      expiresIn: "15m",
    });
    const refreshToken = jwt.sign(payload, "JWT_REFRESH_SECRET", {
      expiresIn: "30d",
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export const tokenService = new TokenService();

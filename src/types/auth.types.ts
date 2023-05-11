import { IUser } from "./users.types";

export type ICredentials = Pick<IUser, "email" | "password">;

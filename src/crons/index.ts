import { removeOldPasswords } from "./remove_old_password_cron";
import { removeOldToken } from "./remove_old_tokens_cron";

export const cronRunner = () => {
  removeOldToken.start();
  removeOldPasswords.start();
};

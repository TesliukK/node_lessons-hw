import { removeOldToken } from "./remove_old_tokens_cron";

export const cronRunner = () => {
  removeOldToken.start();
};

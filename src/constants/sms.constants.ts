import { EEmailActions } from "../enums";

export const smsTemplates: { [key: string]: string } = {
  [EEmailActions.WELCOME]: "Great to see",

  [EEmailActions.FORGOT_PASSWORD]: "We control your password",
};

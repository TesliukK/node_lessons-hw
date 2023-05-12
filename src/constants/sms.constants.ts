import { EEmailActions } from "./email.constants";

export const smsTemplates = {
  [EEmailActions.WELCOME]: {
    subject: "Great to see",
    templateName: "register",
  },
  [EEmailActions.FORGOT_PASSWORD]: {
    subject: "We control your password",
    templateName: "forgot_password",
  },
};

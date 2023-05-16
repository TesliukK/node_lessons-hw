import { EEmailActions } from "../enums";

export const allTemplates: {
  [key: string]: { subject: string; templateName: string };
} = {
  [EEmailActions.WELCOME]: {
    subject: "Great to see",
    templateName: "register",
  },
  [EEmailActions.FORGOT_PASSWORD]: {
    subject: "We control your password",
    templateName: "forgot_password",
  },
};

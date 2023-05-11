export enum EEmailActions {
  WELCOME,
  FORGOT_PASSWORD,
}

export const allTemplates = {
  [EEmailActions.WELCOME]: {
    subject: "Great to see",
    templateName: "register",
  },
  [EEmailActions.FORGOT_PASSWORD]: {
    subject: "We control your password",
    templateName: "forgot_password",
  },
};

export enum EGenders {
  female = "female",
  male = "male",
  mixed = "mixed",
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  gender: string;
}

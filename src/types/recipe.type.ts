import { User } from "../types/user.types";
export type Recipe = {
  _id?: string;
  title: string;
  description: string;
  duration: number;
  user?: Partial<User>;
  img?: string;
};

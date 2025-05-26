import { string } from "yup";

interface ILoginValues {
  email: string;
  password: string;
}

interface IRegisterValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: 0;
}

interface IUserResponse {
  message: string;
  user: IUser;
}
interface IShoes {
  _id: string;
  name: string;
  picture: string[];
  description: string;
  isNew: boolean;
  discount: number;
  size: string;
  color: string;
  gender: string;
  price: number;
  updatedAt: string;
}
interface IShoesFormValues {
  name: string;
  price: string | number;
  description: string;
  color: string;
  size: string;
  isNew: boolean;
  discount: string | number;
  gender: string;
}

export type {
  ILoginValues,
  IRegisterValues,
  IUser,
  IUserResponse,
  IShoes,
  IShoesFormValues,
};

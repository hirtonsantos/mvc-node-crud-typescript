export interface IUser {
  id: string;
  name: string;
  email: string;
  age: number;
  created_at: Date;
  updated_at: Date;
}

export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  age?: number;
  password?: string;
}

export interface IUserUpdate {
  name?: string;
  email?: string;
  age?: number;
  password?: string;
}

export interface IRequest extends Request {
  newUser: IUserCreate;
  updatedUser: IUserUpdate;
}

export interface IUserLogin{
  email: string
  password: string
}
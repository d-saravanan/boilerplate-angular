import { IBaseModel } from "./base.models";

export class Customer implements IBaseModel {
  Id: number;
  FirstName: string;
  LastName: string;
  Email: string;
  SSN: string;
  Aadhar: string;
}

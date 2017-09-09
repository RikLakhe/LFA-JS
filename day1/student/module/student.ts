import { IStudent } from "./module/IStudent";

export class Student implements IStudent{
    firstName:string;
    lastName:string;
    public fullName():string{
        return this.firstName+" "+this.lastName;
    }
}
import { Student } from "./module/student";
import { IStudent } from "./module/IStudent";
import { ScholorshipStudent } from "./module/ScholorshipStudent";

let std:IStudent = new ScholorshipStudent();

std.firstName="rikesh";
std.lastName="shrestha";

console.log(std.fullName());

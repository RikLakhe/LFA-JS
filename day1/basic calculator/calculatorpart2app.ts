import { MathCommand } from "./commands/MathCommand";
import { MathFactory } from "./commands/MathFactory";

let cmdadd:MathCommand = MathFactory.get("+");
let cmdsub:MathCommand = MathFactory.get("-");
let cmdmult:MathCommand = MathFactory.get("*");
let cmddiv:MathCommand = MathFactory.get("/");

let a:number = cmdadd.calculate(4,6);
let b:number = cmdsub.calculate(4,6);
let c:number = cmdmult.calculate(4,6);
let d:number = cmddiv.calculate(4,6);

console.log("add="+a);
console.log("sub="+b);
console.log("mult="+c);
console.log("div="+d);
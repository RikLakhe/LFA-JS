import { Calculator } from "./calculatorpart1";
let a=32,b=53;

let calc:Calculator=new Calculator();
let g:number=calc.add(a,b);
let y:number=calc.sub(a,b);
let x:number=calc.mult(a,b);
let z:number=calc.div(a,b);


console.log("add="+g+"sub="+y+"mult="+x+"div="+z);
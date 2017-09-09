import { MathCommand } from "./MathCommand";
export class SubCommand implements MathCommand{
    public calculate(x:number,y:number):number{
        return x-y;
    }
}
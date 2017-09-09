import { MathCommand } from "./MathCommand";
export class MultCommand implements MathCommand{
    public calculate(x:number,y:number):number{
        return x*y;
    }
}
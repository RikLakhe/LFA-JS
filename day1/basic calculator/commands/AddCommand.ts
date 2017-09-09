import { MathCommand } from "./MathCommand";
export class AddCommand implements MathCommand{
    public calculate(x:number,y:number):number{
        return x+y;
    }
}
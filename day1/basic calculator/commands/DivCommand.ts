import { MathCommand } from "./MathCommand";
export class DivCommand implements MathCommand{
    public calculate(x:number,y:number):number{
        if(x===0||y===0){
            return null;
        }else if(x<y){
            return y/x;
        }else{
            return x/y;
        }
    }
}
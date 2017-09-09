import { MathCommand } from "./MathCommand";

export class MathContext{
    private cmd:MathCommand;

    public constructor(cmd:MathCommand){
        this.cmd= cmd;
    }
    
    public doCalculation(x:number,y:number) {
        console.log(this.cmd.calculate(x,y));
    }
}
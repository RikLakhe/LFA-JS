export class Calculator{
    public add(x:number,y:number):number {
        return x+y;
    }
    public sub(x:number,y:number):number {
        return x-y;
    }
    public mult(x:number,y:number):number {
        return x*y;
    }
    public div(x:number,y:number):number {
        if(x===0||y===0){
            return null;
        }else if(x<y){
            return y/x;
        }else{
            return x/y;
        }
    }
}
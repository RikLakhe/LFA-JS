import { AddCommand } from "./AddCommand";
import { SubCommand } from "./SubCommand";
import { MultCommand } from "./MultCommand";
import { DivCommand } from "./DivCommand";
import { MathCommand } from "./MathCommand";

export class MathFactory{
    public static get(key:string):MathCommand{
        if(key==='+'){
            return new AddCommand();
        }else if(key==='-'){
            return new SubCommand();
        }else if(key==='*'){
            return new MultCommand();
        }else if(key==='/'){
            return new DivCommand();
        }else{
            return null;
        }
    }    

}
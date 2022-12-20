
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
 name: 'mayus'   
})
export class MayusculasPipe {

        transform(valor: string, mayusculas:boolean = true):string {
        
        return (mayusculas) ? valor.toUpperCase() : valor.toLowerCase();
        
    }

}
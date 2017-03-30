import  { Component } from '@angular/core';
import { Keg } from './app.kegs';

@Component({

})

export class PintComponent{
    kegs = Kegs;


    servePint(){
        this.keg.quantity -=1;
        
    }

}

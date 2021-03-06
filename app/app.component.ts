import  { Component } from '@angular/core';
import { Keg } from './app.kegs';
import {EditKegComponent} from './edit-keg.component';

 const Kegs: Keg[]  = [];

 Kegs.push(new Keg('Bud Light', 'Anheuser-Busch', 111, 3.88, 11));
 Kegs.push(new Keg('Rolling Rock', 'Anheuser-Busch', 167, 4.4, 124));
 Kegs.push(new Keg('Blue Moon', 'Anheuser-Busch', 150, 5.4, 124));
 Kegs.push(new Keg('LandShark Lager', 'Anheuser-Busch', 147, 4.7, 124));
 Kegs.push(new Keg('Trashed', 'Anheuser-Busch', 147, 8.7, 124));
 Kegs.push(new Keg('Coma', 'Anheuser-Busch', 147, 12.7, 124));

 for(let keg of Kegs){
     console.log(keg.kegName);
 }


@Component({
    selector: 'app-root',
    template: `
    <h1 class="welcome">Welcome to the Tap Room</h1>
    <ul class="row">
    <li *ngFor="let keg of kegs">
    <div class="col-md-4 beer-panel"  >
    <div [class] = "quantityColor(keg)">
        <h3 class="beer-heading"><span class="beer-name">{{keg.kegName}}</span> <em>by</em> <span class="beer-brand">{{keg.kegBrand}}</span></h3>
        <h4 class>Price: {{keg.price}} /pint</h4>
        <h4>Alcohol Content: <span [class] = "beerStrength(keg)">{{keg.alcoholContent}}%</span></h4>
        <h4>Keg Quantity: {{keg.quantity}}</h4>
        <button (click) = "editKeg(keg)">Edit</button>

        <button (click)= "sellPint(keg)">Sell Pint</button>
    </div>
    </div>
    </li>
    </ul>
    <edit-kegs [selectedKeg] = "selectedKeg"></edit-kegs>
    <form>
        <input [(ngModel)] = "newKegName" type="text" placeholder="Name"name="Name">
        <br>
        <input [(ngModel)] = "newKegBrand" type="text" placeholder="Brand"name="Brand">
        <br>
        <input [(ngModel)] = "newPrice" type="text" placeholder="Price"name="Price">
        <br>
        <input [(ngModel)] = "newAlcoholContent" type="text" placeholder="Alcohol Content"name="Alcohol
Content">
        <br>
        <input [(ngModel)] = "newQuantity" type="text" placeholder="Quantity"name="Quantity">
        <br>
        <button class="btn btn-primary" (click)="newBeer(newKegName, newKegBrand, newPrice, newAlcoholContent, newQuantity)">Add Beer</button>
    </form>
    `
})

export class AppComponent {
    kegs = Kegs;
    selectedKeg = null;


    newBeer(newKegName, newKegBrand, newPrice, newAlcoholContent, newQuantity) {
        this.kegs.push(new Keg(newKegName, newKegBrand, newPrice, newAlcoholContent, newQuantity))
    }

    editKeg(clickedKeg) {
        this.selectedKeg = clickedKeg;
    }

    quantityColor(keg){
        if(keg.quantity <= 10){
            return "low-beer";
        }
    }

    sellPint(clickedKeg){
        if(clickedKeg.quantity <= 0){
            return clickedKeg.quantity = 0;
        } else {
            clickedKeg.quantity -= 1;
        }
    }

    beerStrength(keg) {
        if(keg.alcoholContent > 11){
            return "very-strong";
        } else if(keg.alcoholContent > 7){
            return "strong";
        } else if(keg.alcoholContent > 5){
            return "medium";
        } else {
            return "weak";
        }
    }


    // pintCost = function(kegCost) {
    //     var pintPrice:number = 5*(kegCost/this.quantity);
    // }

}

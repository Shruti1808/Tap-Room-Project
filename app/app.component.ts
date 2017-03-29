import  { Component } from '@angular/core';
import { Keg } from './app.kegs';

 const Kegs: Keg[]  = [];

 Kegs.push(new Keg('Bud Light', 'Anheuser-Busch', 111, 3.88, 124));
 Kegs.push(new Keg('Rolling Rock', 'Anheuser-Busch', 167, 4.4, 124));
 Kegs.push(new Keg('Blue Moon', 'Anheuser-Busch', 150, 5.4, 124));
 Kegs.push(new Keg('LandShark Lager', 'Anheuser-Busch', 147, 4.7, 124));

 for(let keg of Kegs){
     console.log(keg.kegName);
 }


@Component({
    selector: 'app-root',
    template: `
    <h1>Welcome to the Tap Room</h1>
    <div *ngFor="let keg of kegs">
    <hr>
        <h3>{{keg.kegName}} by {{keg.kegBrand}}</h3>
        <h4>Price: {{pintCost(keg.price)}} /pint</h4>
        <h4>Alcohol Content: {{keg.alcoholContent}}%</h4>

    </div>

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

    newBeer(newKegName, newKegBrand, newPrice, newAlcoholContent, newQuantity) {
        this.kegs.push(new Keg(newKegName, newKegBrand, newPrice, newAlcoholContent, newQuantity))
    }

    editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

    // pintCost = function(kegCost) {
    //     var pintPrice:number = 5*(kegCost/this.quantity);
    // }

}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './kegs.model';

@Component({
    selector: 'edit-kegs',
    template:`
    <div class="edit" *ngIf ="selectedKeg">
    <h3>{{selectedKeg.kegName}}</h3>
    <hr>
    <h3>Edit Keg</h3>
    <label for="keg-name">Name: </label>
    <input [(ngModel)] = "selectedKeg.kegName" type="text">
    <button type="button btn-primary" name="button" (click)>Edit</button>

    </div>

    `
})

export class EditKegComponent {

}

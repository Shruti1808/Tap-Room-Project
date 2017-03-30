import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './app.kegs';

@Component({
    selector: 'edit-kegs',
    template:`
    <div class="edit" *ngIf ="selectedKeg">
        <h3>{{selectedKeg.kegName}}</h3>
        <hr>
    
        <label for="keg-name">Name: </label>
        <input [(ngModel)] = "selectedKeg.kegName" type="text" name = "selected-name">
        <button (click)="hideEdit()" name="button">Save</button>
    </div>
    `
    styles: [`
        .edit {
            border: solid black 1px;
        },
        `]
})

export class EditKegComponent {
    @Input() selectedKeg = Keg;

    hideEdit(){
        this.selectedKeg = null;
    }
}

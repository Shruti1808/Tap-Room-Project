
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }   from '@angular/forms';
import { EditKegComponent } from './edit-keg.component';


@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [ AppComponent, EditKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {

 }

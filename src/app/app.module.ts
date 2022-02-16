import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component'; //añadido para no dar fallo en app.component.html
import { HeroesComponent } from './heroes/heroes.component'; //añadido para no dar fallo en app.component.html

@NgModule({
  declarations: [
    AppComponent,
    HeroFormComponent, //añadido para no dar fallo en app.component.html
    HeroesComponent //añadido para no dar fallo en app.component.html
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

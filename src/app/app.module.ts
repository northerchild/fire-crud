import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
//Rutas
import { APP_ROUTING } from './app.routes';
//Servicios
import {HeroesService} from './services/heroes.service'
//Componentes
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesEditComponent } from './components/heroes-edit/heroes-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

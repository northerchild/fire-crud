import { RouterModule, Routes } from '@angular/router';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroesEditComponent} from './components/heroes-edit/heroes-edit.component';

const APP_ROUTES: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes-edit/:id', component: HeroesEditComponent },
  { path: '**', pathMatch: 'full', redirectTo:'heroes' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES /*{useHash:true}*/)
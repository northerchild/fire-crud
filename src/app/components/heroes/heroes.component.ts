import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../services/heroes.service'
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes:any[] = [];
  constructor(private _heroeServices:HeroesService, private route:ActivatedRoute) {
  	this._heroeServices.getHeroes().subscribe(data=>{
  		console.log(data)
  		this.heroes = data;
  	})
   }

  ngOnInit() {
  }
  eliminar(key$:string){
  	this._heroeServices.borrarHeroe(key$).subscribe(respuesta =>{
  		if(respuesta) {
  			console.error(respuesta)
  		}else{
  			delete this.heroes[key$]
  		}
  	})
  }

}

import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-heroes-edit',
  templateUrl: './heroes-edit.component.html',
  styleUrls: ['./heroes-edit.component.css']
})
export class HeroesEditComponent implements OnInit {

  heroe:Heroe={
  	nombre:"",
  	bio:"",
  	casa:"Marvel"
  }
  nuevo:boolean = false;
  id:string;
  constructor(private _hereoService:HeroesService, private router:Router, private route:ActivatedRoute) { 
  	this.route.params.subscribe(parametros=>{
  		this.id = parametros["id"];
  	})
  }

  ngOnInit() {
  }
  guardar(){
  	if(this.id === "nuevo") {
  		// insertando
  		this._hereoService.nuevoHeroe(this.heroe).subscribe(data=>{
 		this.router.navigate(['/heroe',data.name])
	  	},error=> console.error(error)
	  	);
  	} else {
  		// actualizando
  		this._hereoService.ActualizarHeroe(this.heroe,this.id).subscribe(data=>{
 			console.log(data)
	  	},error=> console.error(error)
	  	);
  	}
 	
  }
}

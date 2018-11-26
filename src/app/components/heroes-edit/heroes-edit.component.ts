import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';
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

  constructor(private _hereoService:HeroesService, private router:Router) { }

  ngOnInit() {
  }
  guardar(){
  	
 	this._hereoService.nuevoHeroe(this.heroe).subscribe(data=>{
 		this.router.navigate(['/heroe',data.name])
  	},error=> console.error(error)
  	);
  }
}

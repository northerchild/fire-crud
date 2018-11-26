import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Heroe} from '../../interfaces/heroe.interface';
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

  constructor() { }

  ngOnInit() {
  }
  guardar(){
  	console.log(this.heroe);
  }
}

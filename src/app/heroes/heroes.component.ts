import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero.service'; //importamos el servicio de
//hero.service
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {



  hero : Hero = {
   id: 42,
   name: "SkyDog",
   power: "Fetch any object at any distance",
  alterEgo: "Leslie Rollover"




};

  constructor() { }

  ngOnInit(): void {
  }

}

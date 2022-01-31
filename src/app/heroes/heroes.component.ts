import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

export interface Hero {
  name: string;
  id: number;
}

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit, OnChanges{
  selectedHero: Hero = {
    name: 'Hero',
    id: -1
  };
  heroes: Hero[] = [];
  constructor(private heroservice: HeroService) {
    //this.heroes = this.heroservice.getHeroes();
  }
  ngOnChanges() {
  }
  ngOnInit() {
    this.getHeroes();
  }
  heroSelected(hero: Hero) {
    this.selectedHero = hero;
    this.heroservice.detailsSelected = true;
    console.log(hero);
  }
  getdetailsSelected() {
    return this.heroservice.detailsSelected;
  }
  getHeroes() {
    this.heroservice.getHeroes().subscribe(heros => this.heroes = heros);
  }
}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

import { Hero } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  selectedHero: Hero = {
    name: 'Hero',
    id: -1
  };
  constructor(private heroservice: HeroService, private route: ActivatedRoute) { }
  ngOnChanges() {
    
  }
  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroservice.getHero(id).subscribe(hero => this.selectedHero = hero!);
  }
  goBack() {
    this.heroservice.detailsSelected = false;
  }
  getdetailsSelected() {
    return this.heroservice.detailsSelected;
  }
}

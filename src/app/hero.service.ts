import { Injectable, OnChanges } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from './heroes/heroes.component';
@Injectable({
  providedIn: 'root'
})
export class HeroService implements OnChanges {
  detailsSelected: boolean = false;
  heroes: Hero[] = [
    { id: 11, name: 'Dr Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 18, name: 'Dr IQ' },
    { id: 17, name: 'Dynama' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];

  ngOnChanges() {
    this.heroes.sort(function (a, b) {
      return a.id - b.id;
    })
  }
  ngOnInit(): void {
    this.heroes.sort(function (a, b) {
      return a.id - b.id;
    })
  }
  getHeroes() { //Returns an observable to be subscribed to
    return of(this.heroes);
  }
  getHero(id: number) {
    return of(this.heroes.find(h => h.id === id));
  }
  constructor() { }
}

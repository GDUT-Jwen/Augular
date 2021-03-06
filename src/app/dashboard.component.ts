import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
  selector: 'my-dashboard',
  templateUrl: './html/dashboard.component.html',
  styleUrls:['./css/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroservice: HeroService) {
  };

  ngOnInit(): void {
    this.heroservice.getHeroes()
      .then(heroes => this.heroes = heroes);
  }




}

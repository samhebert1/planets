import { Component, OnInit } from '@angular/core';
import { PlanetPosition } from './core/models/planet-position.model';
import { PlanetsService } from './core/services/planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Planets';
  planetPositions: PlanetPosition[] = [];
  
  constructor(private planets: PlanetsService) {}
  
  ngOnInit(): void {
    this.planets.getAllPlanets().subscribe(plPos => {
      console.log(plPos);
      this.planetPositions = plPos;
    })

  }

}

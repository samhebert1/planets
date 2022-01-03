import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { PlanetPosition } from '../models/planet-position.model';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  constructor(private http: HttpClient) {}

  getAllPlanets = (): Observable<PlanetPosition[]> => {
    let positions: PlanetPosition[] = [];
    const url =
      'https://astro-charts.com/tools/get_widget_coa/?lat=30.22409&lng=-92.01984&path=astro-charts.com';
    return this.http.get(url).pipe(
      map((meta: any) => meta[0]),

      map((planetPositions: any[]) => {
        console.log('hi from service');
        planetPositions.forEach((position) => {
          const plPos: PlanetPosition = {
            planet: position[0],
            sign: position[1],
            degrees: position[2],
            minutes: position[3],
            isRetro: position[4],
          };
          positions.push(plPos);
        });
      }),
      switchMap(() => {
        return of(positions);
      })
    );
  };
}

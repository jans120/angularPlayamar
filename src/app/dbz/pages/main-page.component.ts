import { Component } from '@angular/core';
import { Personaje } from '../interfaces/Personaje.interfaces';


@Component({
  selector: 'app-dbz-main-page',
  standalone: false,
  templateUrl: 'main-page.component.html'
})

export class MainPage {
  public personajes: Personaje[] = [{
    nombre: "Goku",
    fuerza: 50000
  },
  {
    nombre: "Krilin",
    fuerza: 2
  },
  {
    nombre: "Piccolo",
    fuerza: 8000
  }
  ]
}

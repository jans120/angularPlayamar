import { Component, Input } from '@angular/core';
import { Personaje } from '../../interfaces/Personaje.interfaces';

@Component({
  standalone: false,
  selector: 'dbz-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input()
  public listapersonajes: Personaje[] = [{
    nombre: "Trunk",
    fuerza: 7000
  }
  ]

}

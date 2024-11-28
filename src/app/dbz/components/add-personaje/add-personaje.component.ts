import { Personaje } from './../../interfaces/Personaje.interfaces';
import { Component } from '@angular/core';


@Component({
  standalone: false,
  selector: 'dbz-add-personaje',
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})

export class AddPersonajeComponent {
  public personaje: Personaje = {
    nombre: '',
    fuerza:  0
  };

  public AddPersonaje(): void {
    console.log(this.personaje);
  }

}

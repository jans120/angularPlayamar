import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-heroes-heroe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public centro1 = {
    nombre: 'IES Playamar',
    localidad: 'Torremolinos',
    familias: ['Informática y Comunicaciones', 'Transporte y Mantenimiento'],
    logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png',
  };
  public centro2 = {
    nombre: 'IES Jacaranda',
    localidad: 'Churriana',
    familias: ['Hostelería y Turismo'],
    logo: 'https://pbs.twimg.com/profile_images/3059231666/21dd362313c922734bf3297b69b2da14_400x400.jpeg',
  }
  public centroActual = this.centro1;

  public cambiarCentro() {
    if (this.centroActual === this.centro1) {
      this.centroActual = this.centro2;
    } else {
      this.centroActual = this.centro1;
    }

  }
  public mayusculas() {
    return this.centroActual.nombre.toUpperCase();
  }
};



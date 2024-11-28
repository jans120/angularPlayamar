import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Centro {
  nombre: string;
  localidad: string;
  ciclos: string[];
  logo: string;
}

@Component({
  selector: 'app-heroes-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  // Listado de centros
  centros: Centro[] = [
    { nombre: 'IES Playamar', localidad: 'Torremolinos', ciclos: ['Informática y Comunicaciones', 'Transporte y Mantenimiento'], logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png' },
    { nombre: 'IES Jacaranda', localidad: 'Churriana', ciclos: ['Hostelería y Turismo'], logo: 'https://pbs.twimg.com/profile_images/3059231666/21dd362313c922734bf3297b69b2da14_400x400.jpeg' },
    { nombre: 'IES La Rosaleda', localidad: 'La Roca', ciclos: ['Mantenimiento de material rodante ferroviario', 'Chapa y pintura'], logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FJ4UYiM5wyb5oWPlHj_N12fUZb0zKKehvHHDC8U-hnhCG_hTJ8TUcd1dkfpHJlnFHKw&usqp=CAU' }
  ];

  // Pila para almacenar centros eliminados
  pila: Centro[] = [];

  // Indice de la posición actual
  posicion: number = 0;

  // Función para eliminar el centro actual
  eliminar() {
    const centroEliminado = this.centros.splice(this.posicion, 1)[0];
    this.pila.push(centroEliminado);
    this.actualizarBotones();
  }

  // Función para insertar un centro desde la pila
  insertar() {
    if (this.pila.length > 0) {
      const centroInsertado = this.pila.pop();
      this.centros.splice(this.posicion, 0, centroInsertado!);
    }
    this.actualizarBotones();
  }

  // Función para avanzar en la lista
  siguiente() {
    if (this.posicion < this.centros.length - 1) {
      this.posicion++;
    }
    this.actualizarBotones();
  }

  // Función para retroceder en la lista
  anterior() {
    if (this.posicion > 0) {
      this.posicion--;
    }
    this.actualizarBotones();
  }

  // Actualiza la visibilidad de los botones dependiendo de la posición actual
  actualizarBotones() {
    this.mostrarAnterior = this.posicion > 0;
    this.mostrarPosterior = this.posicion < this.centros.length - 1;
  }

  // Variables de visibilidad de botones
  mostrarAnterior: boolean = false;
  mostrarPosterior: boolean = true;

  // Getter para mostrar el contenido de la pila
  get pilaContenido() {
    return this.pila.map(centro => centro.nombre).join(', ');
  }

}

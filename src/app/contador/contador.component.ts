import { Component } from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  standalone: true,
})
export class ContadorComponent {
  public title: string = "Mi primera App de Angular"
  public contador: number = 0;

  sumar(): void {
    this.contador += 1;
  }
  restar(): void {
    this.contador -= 1;
  }
  reset(): void {
    this.contador = 0;
  }
}

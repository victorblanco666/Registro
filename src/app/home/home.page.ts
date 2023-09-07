import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fecha: string = '';
  

  constructor() {
    this.fechaActual = new Date().toISOString();
  }

  mostrarFecha() {
    this.fecha = (this.fechaActual)
  }

¿
}
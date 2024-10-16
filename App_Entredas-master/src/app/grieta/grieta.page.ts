import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grieta',
  templateUrl: './grieta.page.html',
  styleUrls: ['./grieta.page.scss'],
})
export class GrietaPage {
  nombre!: string;
  apellido!: string;
  edad: number | undefined; 
  tipoEntrada: string = 'Normal'; 
  esJugadorLoL: boolean = false; 
  cantidad: number = 1; 
  total: number = 0;

  constructor(private router: Router) {}

  // calcular el total
  updatePrecio() {
    let precioBase = this.tipoEntrada === 'VIP' ? 20000 : 10000; 
    let descuentoEdad = 0;
    let descuentoLoL = 0;

  
    if (this.edad !== undefined) {
      if (this.edad < 18) {
        descuentoEdad = 0.1; 
      } else if (this.edad > 60) {
        descuentoEdad = 0.2; 
      }
    }

   
    if (this.esJugadorLoL) {
      descuentoLoL = 0.1; 
    }

    const descuentoAplicado = precioBase * (descuentoEdad + descuentoLoL);
    const precioFinal = precioBase - descuentoAplicado;
    this.total = precioFinal * this.cantidad;
  }

  onSubmit() {
    if (!this.nombre || !this.apellido || this.edad === undefined || this.edad < 0 || this.cantidad < 1) {
      alert('Por favor, ingrese todos los datos necesarios: nombre, apellido, edad, y cantidad de entradas (mínimo 1).');
      return;
    }

    this.updatePrecio(); 

    let precioBase = this.tipoEntrada === 'VIP' ? 20000 : 10000; 
    let descuentoEdad = 0;
    let descuentoLoL = 0;


    if (this.edad < 18) {
      descuentoEdad = 0.1; 
    } else if (this.edad > 60) {
      descuentoEdad = 0.2; 
    }


    if (this.esJugadorLoL) {
      descuentoLoL = 0.1; 
    }

    const descuentoAplicado = precioBase * (descuentoEdad + descuentoLoL);
    const precioFinal = precioBase - descuentoAplicado;

    
    alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nTipo de Entrada: ${this.tipoEntrada}\nPrecio Base: $${precioBase}\nDescuento por Edad: $${precioBase * descuentoEdad} ${this.edad < 18 ? '(Menor de 18 años)' : this.edad > 60 ? '(Mayor de 60 años)' : '(Ninguno)'}\nDescuento por ser Jugador de LoL: $${precioBase * descuentoLoL} ${this.esJugadorLoL ? '(Sí)' : '(No)'}\nDescuento Total Aplicado: $${descuentoAplicado}\nPrecio Final: $${this.total}`);

   
    this.router.navigate(['/home']); 
  }

  goBack() {
    this.router.navigate(['../']); 
  }
}

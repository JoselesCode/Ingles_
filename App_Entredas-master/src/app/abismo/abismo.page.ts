import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-abismo',
  templateUrl: './abismo.page.html',
  styleUrls: ['./abismo.page.scss'],
})
export class AbismoPage {
  nombre!: string;
  apellido!: string;
  edad: number | undefined; 
  tipoEntrada: string = 'Normal'; 
  esJugadorLoL: boolean = false;  
  cantidad: number | undefined; 

  constructor(private router: Router) {}

  onSubmit() {
    if (this.edad === undefined || this.edad < 0 || this.cantidad === undefined || this.cantidad < 1) {
      alert('Por favor, ingrese todos los datos válidos (edad y cantidad de entradas).');
      return;
    }

    let precioBase = this.tipoEntrada === 'VIP' ? 15000 : 12000; 
    let descuentoEdad = 0;
    let descuentoLoL = 0;

      // Descuento 1
    if (this.edad < 18) {
      descuentoEdad = 0.1; // 10% descuento para menores de 18 años
    } else if (this.edad > 60) {
      descuentoEdad = 0.2; // 20% descuento para mayores de 60 años
    }

    // Descuento 2
    if (this.esJugadorLoL) {
      descuentoLoL = 0.1; // 10% descuento adicional para jugadores de LoL
    }

    const precioTotalBase = precioBase * this.cantidad;
    const descuentoAplicado = precioTotalBase * (descuentoEdad + descuentoLoL);
    const precioFinal = precioTotalBase - descuentoAplicado;

   
    alert(`Nombre: ${this.nombre}\nApellido: ${this.apellido}\nTipo de Entrada: ${this.tipoEntrada}\nCantidad de Entradas: ${this.cantidad}\nPrecio Base por Entrada: $${precioBase}\nPrecio Total Base: $${precioTotalBase}\nDescuento por Edad: $${precioTotalBase * descuentoEdad} ${this.edad < 18 ? '(Menor de 18 años)' : this.edad > 60 ? '(Mayor de 60 años)' : '(Ninguno)'}\nDescuento por ser Jugador de LoL: $${precioTotalBase * descuentoLoL} ${this.esJugadorLoL ? '(Sí)' : '(No)'}\nDescuento Total Aplicado: $${descuentoAplicado}\nPrecio Final: $${precioFinal}`);

    
    this.router.navigate(['/home']);  
  }

  goBack() {
    this.router.navigate(['../']); // Back al inicio
  }
}

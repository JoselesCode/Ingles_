import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private tickets: any[] = [];

  constructor() { }

  // Método para agregar un ticket
  addTicket(ticket: any) {
    this.tickets.push(ticket);
  }

  // Método para obtener todos los tickets
  getTickets() {
    return this.tickets;
  }

  // Método para calcular el precio total del ticket
  calculateTotal(ticket: any): number {
    let basePrice = ticket.ticketType === 'vip' ? 15000 : 10000;
    let discount = 0;

    if (ticket.age < 18) {
      discount = 0.10;
    } else if (ticket.age > 60) {
      discount = 0.20;
    }

    let total = basePrice * ticket.quantity;
    return total - (total * discount);
  }
}

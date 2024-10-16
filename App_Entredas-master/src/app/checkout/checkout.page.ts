import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage {
  checkoutForm: FormGroup;
  totalAmount: number = 0;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private ticketService: TicketService
  ) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      event: ['', Validators.required],
      ticketType: ['', Validators.required],
      quantity: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      const formValue = this.checkoutForm.value;
      this.totalAmount = this.ticketService.calculateTotal(formValue);
      this.ticketService.addTicket(formValue);
      this.navCtrl.navigateForward('/confirmation', {
        queryParams: { totalAmount: this.totalAmount }
      });
    }
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importar ReactiveFormsModule
import { IonicModule } from '@ionic/angular';
import { CheckoutPage } from './checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,  // Agregar ReactiveFormsModule aquí
    IonicModule
  ],
  declarations: [CheckoutPage]
})
export class CheckoutPageModule {}

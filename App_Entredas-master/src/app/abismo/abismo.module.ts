import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbismoPageRoutingModule } from './abismo-routing.module';

import { AbismoPage } from './abismo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbismoPageRoutingModule
  ],
  declarations: [AbismoPage]
})
export class AbismoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrietaPageRoutingModule } from './grieta-routing.module';

import { GrietaPage } from './grieta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GrietaPageRoutingModule
  ],
  declarations: [GrietaPage]
})
export class GrietaPageModule {}

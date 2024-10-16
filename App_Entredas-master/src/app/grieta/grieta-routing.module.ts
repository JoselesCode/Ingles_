import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrietaPage } from './grieta.page';

const routes: Routes = [
  {
    path: '',
    component: GrietaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrietaPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbismoPage } from './abismo.page';

const routes: Routes = [
  {
    path: '',
    component: AbismoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbismoPageRoutingModule {}

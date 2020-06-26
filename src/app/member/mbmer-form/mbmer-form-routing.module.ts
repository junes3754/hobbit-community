import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MbmerFormComponent } from './mbmer-form.component';

const routes: Routes = [{ path: '', component: MbmerFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MbmerFormRoutingModule { }

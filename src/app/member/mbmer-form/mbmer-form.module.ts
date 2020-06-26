import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MbmerFormRoutingModule } from './mbmer-form-routing.module';
import { MbmerFormComponent } from './mbmer-form.component';


@NgModule({
  declarations: [MbmerFormComponent],
  imports: [
    CommonModule,
    MbmerFormRoutingModule
  ]
})
export class MbmerFormModule { }

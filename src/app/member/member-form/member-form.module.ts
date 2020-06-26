import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberFormRoutingModule } from './member-form-routing.module';
import { MemberFormComponent } from './member-form.component';


@NgModule({
  declarations: [MemberFormComponent],
  imports: [
    CommonModule,
    MemberFormRoutingModule
  ]
})
export class MemberFormModule { }

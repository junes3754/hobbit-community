import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardViewRoutingModule } from './board-view-routing.module';
import { BoardViewComponent } from './board-view.component';


@NgModule({
  declarations: [BoardViewComponent],
  imports: [
    CommonModule,
    BoardViewRoutingModule
  ]
})
export class BoardViewModule { }

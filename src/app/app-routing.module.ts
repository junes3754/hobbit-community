import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },

  {
    path: 'board-list',
    component: LayoutComponent,
    loadChildren: () =>
      import('./board/board-list/board-list.module').then(
        (m) => m.BoardListModule
      ),
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'board-form',
    component: LayoutComponent,
    loadChildren: () =>
      import('./board/board-form/board-form.module').then(
        (m) => m.BoardFormModule
      ),
  },
  {
    path: 'board-view',
    component: LayoutComponent,
    loadChildren: () =>
      import('./board/board-view/board-view.module').then(
        (m) => m.BoardViewModule
      ),
  },
  {
    path: 'member-list',
    component: LayoutComponent,
    loadChildren: () =>
      import('./member/member-list/member-list.module').then(
        (m) => m.MemberListModule
      ),
  },
  {
    path: 'mbmer-form',
    component: LayoutComponent,
    loadChildren: () =>
      import('./member/mbmer-form/mbmer-form.module').then(
        (m) => m.MbmerFormModule
      ),
  },

  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

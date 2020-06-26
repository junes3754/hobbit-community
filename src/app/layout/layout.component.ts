import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  showFiller = false;
  title = 'Hobbit-community';
  panelOpenState = false;
  sidemenuforlayout: string[] = [
    '대시보드',
    '게시판1',
    '게시판2',
    '마이페이지',
    '문의',
    '로그아웃',
  ];
  routeforsidemenu: string[] = [
    'dashboard',
    'board-list',
    'board-list',
    'member-list',
    'board-form',
    'member-form',
  ];
  constructor() {}

  ngOnInit(): void {}
}

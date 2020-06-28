import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router,
  Event as RouterEvent,
  NavigationStart,
  NavigationEnd, // 1
  NavigationCancel, // 1
  NavigationError, // 1
} from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  loading = false;
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
  constructor(private router: Router) {
    router.events.subscribe((event: RouterEvent) => {
      //  this.refreshToken(event);
      this.updateLoadingBar(event); // 4
    });
  }

  // private refreshToken(event: RouterEvent): void {      // 로그인여부 체크 함수
  //   if (event instanceof NavigationStart && this.authService.isLoggedIn()) {
  //     this.authService.refresh().catch((response) => null);
  //   }
  // }
  private updateLoadingBar(event: RouterEvent): void {
    // 3
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      this.loading = false;
    }
  }

  ngOnInit(): void {}
}

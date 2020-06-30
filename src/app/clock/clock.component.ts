import { Component } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent {
  hours: string;
  minutes: string;
  seconds: string;
  private timerId = null;

  private tmphour = null;
  private period = null;
  // tslint:disable-next-line: variable-name
  private hours_cal = null;

  ngOnInit() {
    this.setCurrentTime();
    this.timerId = this.updateTime();
  }

  ngOnDestroy() {
    clearInterval(this.timerId);
  }

  // tslint:disable-next-line: typedef
  private setCurrentTime() {
    const time = new Date(Date.now());

    this.tmphour = time.getHours() - (time.getHours() >= 12 ? 12 : 0);
    this.tmphour = this.leftPadZero(this.tmphour);
    this.period = time.getHours() >= 12 ? 'PM' : 'AM';

    this.hours = this.period + ' ' + this.tmphour;
    // this.hours = this.leftPadZero(time.getHours());
    this.minutes = this.leftPadZero(time.getMinutes());
    this.seconds = this.leftPadZero(time.getSeconds());
  }

  // tslint:disable-next-line: typedef
  private updateTime() {
    setInterval(() => {
      this.setCurrentTime();
    }, 1000);
  }

  // tslint:disable-next-line: typedef
  private leftPadZero(value: number) {
    return value < 10 ? `0${value}` : value.toString();
  }
}

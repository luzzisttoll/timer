// timer.component.ts
import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnDestroy {
  timerStarted: boolean = false;
  elapsedTime: string = '00:00:00';
  startTime: Date | null = null;
  interval: any;

  startTimer() {
    this.timerStarted = true;
    this.startTime = new Date();
    this.interval = setInterval(() => {
      this.updateElapsedTime();
    }, 1000);
  }

  updateElapsedTime() {
    if (this.startTime) {
      const currentTime = new Date();
      const elapsedTime = currentTime.getTime() - this.startTime.getTime();
      const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
      const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      this.elapsedTime = this.formatTime(hours) + ':' + this.formatTime(minutes) + ':' + this.formatTime(seconds);
    }
  }

  formatTime(time: number): string {
    return time < 10 ? '0' + time : '' + time;
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }
}

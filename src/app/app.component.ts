import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  scrollEmitter = new EventEmitter<void>();
  sticky = false;

  ngOnInit(): void {
  }

  handleStick(e): void {
    console.log('navpos:' + e + ' ' + this.sticky);
    if (!this.sticky && e < 0) {
      this.sticky = true;
    }
  }

  handleUnstick(e): void {
    console.log('heropos:' + e + ' ' + this.sticky);
    if (this.sticky && e >= 0) {
      this.sticky = false;
    }
  }
}

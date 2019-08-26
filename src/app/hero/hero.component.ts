import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  navVis: boolean;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navVis = true;
  }

  inView($event: boolean): void {
    console.log($event);
    this.navService.stickySubject.next($event);
    this.navVis = $event;
  }
}

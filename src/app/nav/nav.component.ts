import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nav') nav: ElementRef;
  @Output() navYPos = new EventEmitter<number>();
  @Input() scrollEmitter: EventEmitter<void>;
  @Input() sticky: boolean;

  @Input() hide: boolean;
  @Input() dark: boolean;

  constructor() {
  }

  ngOnInit() {
    this.scrollEmitter.subscribe(n => {
      this.navYPos.emit(this.nav.nativeElement.getBoundingClientRect().top);
    });
  }
}

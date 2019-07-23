import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  // @ts-ignore
  @ViewChild('hero_img') hero_img: ElementRef;
  @Input() scrollEmitter: EventEmitter<void>;
  @Output() heroYPos = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.scrollEmitter.subscribe(n => {
      this.heroYPos.emit(this.hero_img.nativeElement.getBoundingClientRect().bottom);
    });
  }

}

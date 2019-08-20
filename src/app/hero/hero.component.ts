import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  // @ts-ignore
  // tslint:disable-next-line:variable-name
  @ViewChild('hero_img') hero_img: ElementRef;

  constructor(private navService: NavService) { }

  ngOnInit() {}
}

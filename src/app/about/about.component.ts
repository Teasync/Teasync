import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {
  @ViewChild('about', {static: false}) aboutRef;
  vis: boolean;
  cVis: boolean;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.vis = false;
    this.cVis = false;
  }

  ngAfterViewInit(): void {
    this.navService.aboutRef = this.aboutRef;
  }

}

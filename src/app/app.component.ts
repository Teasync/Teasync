import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  navVis: boolean;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.navService.stickySubject.asObservable().subscribe((val: boolean) => this.navVis = !val);
  }
}

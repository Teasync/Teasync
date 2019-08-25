import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private navService: NavService) {
  }

  ngOnInit() {
  }

  onScroll($event: Event): void {
    this.navService.scrollSubject.next();
  }
}

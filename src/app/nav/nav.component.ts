import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @ViewChild('nav', {static: false}) nav: ElementRef;
  @Input() isHeroNav: boolean;
  @Input() isVisible: boolean;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.isVisible = this.isHeroNav;
  }

  navWork($event: Event): void {
    setTimeout(() => this.navService.workRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 1);
  }

  navProjects($event: Event): void {
    setTimeout(() => this.navService.projectsRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 1);
  }

  navSkills($event: Event): void {
    setTimeout(() => this.navService.skillsRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 1)
  }

  navAbout($event: Event): void {
  }
}

import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nav') nav: ElementRef;
  @Input() isHeroNav: boolean;
  visible: boolean;
  stickyStatus: Observable<boolean>;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    if (this.isHeroNav) {
      this.navService.heroNav = this.nav;
      this.navService.getStickyObservable().subscribe(status => {
        this.visible = !status;
      });
    } else {
      this.navService.getStickyObservable().subscribe(status => {
        this.visible = status;
      });
    }
  }

  navWork($event: Event) {
    setTimeout(() => this.navService.workRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 1);
  }

  navProjects($event: Event) {
    setTimeout(() => this.navService.projectsRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 1);
  }

  navSkills($event: Event) {
    setTimeout(() => this.navService.skillsRef.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'}), 1)
  }

  navAbout($event: Event) {
  }
}

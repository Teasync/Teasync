import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit{
  @ViewChild('projects', {static: false}) projectsRef: ElementRef;

  private vis: boolean;

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.vis = false;
  }

  ngAfterViewInit(): void {
    this.navService.projectsRef = this.projectsRef;
  }

}

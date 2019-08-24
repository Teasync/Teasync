import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, AfterViewInit {
  @ViewChild('timeline', {static: false}) workRef: ElementRef;

  jobList = [
    {
      company: 'Scotiabank FactoryU',
      title: 'Innovation Engineer',
      kind: 'Full-Stack',
      date: 'May - Aug 2019',
      platforms: ['Go', 'Django', 'Angular', 'Postgres', 'Keras'],
      points: [
        'Developed backend endpoints in Django and corresponding frontend consumer services and components in Angular for presenting and' +
        ' managing financial information in internal trading tool.',
        'Researched and applied Flux design pattern with Redux for state management to speed up performance of Angular web-app.',
        'Implemented REST endpoints with asynchronous calls and unit tests for mobile app backend in Go.',
        'Designed and trained convolutional neural network to recognize car body types with 78.2% validation accuracy using Keras.'
      ]
    },
    {
      company: 'OpenText',
      title: 'Software Developer',
      kind: 'Automation',
      date: 'Sep - Dec 2018',
      platforms: ['Python', 'Robot Framework', 'PowerShell', 'Batch', 'Selenium'],
      points: [
        'Designed and developed automated testing system with Robot Framework to automate regression testing for continuous integration.',
        'Wrote Python libraries to create functions and access points necessary for CI automation in Robot Framework.',
        'Automated server administration tasks with PowerShell and Batch scripting to accelerate automated regression testing.'
      ]
    },
    {
      company: 'Public Service Commission',
      title: 'Junior Programmer Analyst',
      kind: 'Back-end',
      date: 'Jan - Apr 2018',
      platforms: ['Spring Framework', 'Oracle DB', 'Java'],
      points: [
        'Implemented user-facing searching and indexing in a Spring web app and Oracle database.',
        'Designed and prototyped Spring web-app stack for internal IT support for troubleshooting common technical issues.',
        'Produced tech-specs for the possible implementation of features requested by  clients.'
      ]
    }
  ];
  vis: boolean;
  jobVis: boolean[];

  constructor(private navService: NavService) {
    this.jobVis = new Array(this.jobList.length).fill(false);
  }

  ngOnInit() {
    this.vis = false;
  }

  ngAfterViewInit(): void {
    this.navService.workRef = this.workRef;
  }

}

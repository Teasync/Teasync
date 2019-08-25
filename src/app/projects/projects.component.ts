import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projects', {static: false}) projectsRef: ElementRef;

  private vis: boolean;
  private projectListVis: boolean[];
  projectList: any = [
    {
      name: 'teasync.github.io',
      platforms: 'Angular',
      description: 'This web-app! Custom services and directives for render-on-view of elements scrolled into view.',
      img: null
    },
    {
      name: 'Car Classifier',
      platforms: 'Keras/Tensorflow - Python',
      description: 'Convolutional neural network for identifying 9 car body types with 78.2% validation accuracy. ' +
        'Trained on GCP Compute Engine with VGGNet inspired architecture.',
      img: null
    },
    {
      name: 'Cat vs. Dog Classifier',
      platforms: 'Keras/Tensorflow - Python',
      description: 'Convolutional neural network for distinguishing between cats and dogs with 97.2% validation ' +
        'accuracy.',
      img: null
    },
    {
      name: 'Waste Wizard',
      platforms: 'Django - Python',
      description: 'Web app for finding proper procedures for the disposal of household garbage.',
      img: '../../assets/img/waste-wiz.png'
    },
    {
      name: 'DOSnake',
      platforms: 'Windows Batch',
      description: 'Snake game written in batch. Uses ANSI escape sequences to animate objects.',
      img: '../../assets/img/snake.png'
    }
  ];

  constructor(private navService: NavService) {
    this.projectListVis = new Array(this.projectList.length).fill(false);
  }

  ngOnInit() {
    this.vis = false;
  }

  ngAfterViewInit(): void {
    this.navService.projectsRef = this.projectsRef;
  }

}

import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild('projects', {static: false}) projectsRef: ElementRef;

  vis: boolean;
  projectListVis: boolean[];
  projectList: any[] = [
    {
      name: 'teasync.github.io',
      platforms: 'Angular',
      description: 'This web-app! Built completely from-scratch, with custom components and directives built to work ' +
        'in a 3D perspective wrapper.',
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
    },
    {
      name: 'Slay the Spire Save Utility',
      platforms: 'Qt - Python',
      description: 'Save editor application for unpacking and editing save files in Slay the Spire.',
      img: '../../assets/img/save_editor.png'
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

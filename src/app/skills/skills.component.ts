import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from '../nav.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit, AfterViewInit {
  @ViewChild('skills', {static: false}) skillsRef
  vis: boolean;
  skillList: any = {
    frameworks: [
      {name: 'Golang', img: '../../assets/golang.png'},
      {name: 'Python', img: '../../assets/python.png'},
      {name: 'Java', img: '../../assets/java.png'},
      {name: 'C++', img: '../../assets/cpp.png'},
      {name: 'TypeScript', img: '../../assets/typescript.png'}

    ],
    languages: [
      {name: '', img: ''},
      {name: '', img: ''},
      {name: '', img: ''},
      {name: '', img: ''},
      {name: '', img: ''}
    ],
    technologies: [
      {name: '', img: ''},
      {name: '', img: ''},
      {name: '', img: ''},
      {name: '', img: ''},
      {name: '', img: ''}
    ]
  };

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.vis = false;
  }

  ngAfterViewInit(): void {
    this.navService.skillsRef = this.skillsRef;
  }
}

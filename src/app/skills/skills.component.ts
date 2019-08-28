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
  techVis: boolean;
  frVis: boolean;
  assetsURL = 'assets/img/';

  langVis: boolean;
  skillList: any = {
    languages: [
      {name: 'TypeScript', img: 'typescript.png'},
      {name: 'Golang', img: 'golang.png'},
      {name: 'Python', img: 'python.png'},
      {name: 'Java', img: 'java.png'},
      {name: 'C++', img: 'cpp.png'},
      {name: 'JavaScript', img: 'js.png'},
      {name: 'Batch', img: 'batch.png'},
      {name: 'PowerShell', img: 'powershell.png'},
      {name: 'Oracle PL/SQL', img: 'oracledb.png'},
      {name: 'MySQL', img: 'mysql.png'},
      {name: 'Postgres', img: 'postgres.png'},
    ],
    frameworks: [
      {name: 'Angular', img: 'angular.png'},
      {name: 'Spring', img: 'spring.png'},
      {name: 'Django', img: 'django.png'},
      {name: 'Keras', img: 'keras.png'},
      {name: 'TensorFlow', img: 'tf.png'},
      {name: 'Robot Framework', img: 'robot.png'},
      {name: 'jQuery', img: 'jquery.png'}
    ],
    technologies: [
      {name: 'Git', img: 'git.png'},
      {name: 'Mercurial', img: 'mercurial.png'},
      {name: 'SVN', img: 'svn.png'},
      {name: 'Selenium', img: 'selenium.png'},
    ]
  };

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.vis = false;
    this.techVis = false;
    this.frVis = false;
    this.langVis = false;
  }

  ngAfterViewInit(): void {
    this.navService.skillsRef = this.skillsRef;
  }

  getFullImg(url: string): string {
    return this.assetsURL + url;
  }
}

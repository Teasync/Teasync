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
  skillList: any[] = [
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},
    {name: '', img: ''},

  ];

  constructor(private navService: NavService) {
  }

  ngOnInit() {
    this.vis = false;
  }

  ngAfterViewInit(): void {
    this.navService.skillsRef = this.skillsRef;
  }
}

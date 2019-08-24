import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.scss']
})
export class DividerComponent implements OnInit {
  visible: boolean;

  @Input() imgUrl: string;

  constructor() { }

  ngOnInit() {
    this.visible = false;
  }

}


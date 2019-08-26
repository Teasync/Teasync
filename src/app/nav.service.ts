import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  stickySubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sticky: boolean;
  heroNav: ElementRef;

  workRef: ElementRef;
  projectsRef: ElementRef;
  skillsRef: ElementRef;
  aboutRef: ElementRef;

  constructor() {
    this.sticky = false;
  }
}

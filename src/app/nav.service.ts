import { ElementRef, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  stickySubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  sticky: boolean;
  heroNav: ElementRef;

  scrollSubject: Subject<never> = new Subject();

  constructor() {
    this.sticky = false;

    this.scrollSubject.subscribe(() => {
      const top = this.heroNav.nativeElement.getBoundingClientRect().top;
      if (top > 0 && this.sticky) {
        console.log('unstuck');
        this.stickySubject.next(false);
        this.sticky = false;
      } else if (top <= 0 && !this.sticky) {
        console.log('stuck');
        this.stickySubject.next(true);
        this.sticky = true;
      }
    });
  }
  getStickyObservable(): Observable<boolean> {
    return this.stickySubject.asObservable();
  }
}

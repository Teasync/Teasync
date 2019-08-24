import {AfterViewInit, Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements OnInit, AfterViewInit, OnDestroy {
  @Output() public inView: EventEmitter<boolean> = new EventEmitter();

  private visible: boolean;
  private intersectionObserver?: IntersectionObserver;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.visible = false;
  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
    this.intersectionObserver.observe((this.element.nativeElement) as Element);
  }

  ngOnDestroy(): void {
    this.intersectionObserver.unobserve(this.element.nativeElement);
    this.intersectionObserver.disconnect();
  }

  private checkForIntersection(entries: Array<IntersectionObserverEntry>) {
    entries.forEach((entry: IntersectionObserverEntry) => {

      if (!this.visible && this.checkIfIntersecting(entry)) {
        this.inView.emit(true);
        this.visible = true;
      }

      if (this.visible && !this.checkIfIntersecting(entry)) {
        this.inView.emit(false);
        this.visible = false;
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}

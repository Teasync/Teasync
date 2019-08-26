import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements OnInit, AfterViewInit, OnDestroy {
  @Output() public inView: EventEmitter<boolean> = new EventEmitter();
  @Input() public options: IntersectionObserverInit;
  @Input() public childEl: boolean;

  private visible: boolean;
  private intersectionObserver: IntersectionObserver;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    this.visible = false;
    if (!this.options) {
      this.options = {} as IntersectionObserverInit;
    }
    if (!this.options.root) {
      this.options.root = null;
    }
    if (!this.options.rootMargin) {
      this.options.rootMargin = '0% 0% 0% 0%';
    }
    if (!this.options.threshold) {
      this.options.threshold = 0;
    }
  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, this.options);
    if (!this.childEl) {
      this.intersectionObserver.observe(this.element.nativeElement);
    } else {
      this.intersectionObserver.observe(this.element.nativeElement.childNodes[0]);
    }
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
    if (this.childEl) {
      return entry.isIntersecting && entry.target === this.element.nativeElement.childNodes[0];
    } else {
      return entry.isIntersecting && entry.target === this.element.nativeElement;
    }
  }
}

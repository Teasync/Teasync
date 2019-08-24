import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appDeferLoad]'
})
export class DeferLoadDirective implements AfterViewInit{
  @Output() public deferLoad: EventEmitter<any> = new EventEmitter();

  private intersectionObserver?: IntersectionObserver;

  constructor(private element: ElementRef) {
    console.log(element)
  }

  ngAfterViewInit(): void {
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.checkForIntersection(entries);
    }, {});
    this.intersectionObserver.observe((this.element.nativeElement) as Element);
  }

  private checkForIntersection = (entries: Array<IntersectionObserverEntry>) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (this.checkIfIntersecting(entry)) {
        this.deferLoad.emit();
        this.intersectionObserver.unobserve(this.element.nativeElement);
        this.intersectionObserver.disconnect();
      }
    });
  }

  private checkIfIntersecting(entry: IntersectionObserverEntry) {
    return entry.isIntersecting && entry.target === this.element.nativeElement;
  }
}

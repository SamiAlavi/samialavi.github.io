import { Component, ElementRef, ViewChild, Renderer2, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent {
  @ViewChild('animationContainer', {static: true}) private animationContainer!: ElementRef;
  @Output() destroyed = new EventEmitter<boolean>();
  
  constructor(
    private renderer: Renderer2,
    private host: ElementRef<HTMLElement>) {

  }

  ngOnInit() {
    const animationElement = this.animationContainer.nativeElement;
  
    animationElement.addEventListener('animationend', () => {
      this.host.nativeElement.remove();
      this.destroyed.emit(true);
    });
  }
}

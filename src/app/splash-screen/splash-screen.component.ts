import { Component, ElementRef, ViewChild, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SplashScreenComponent {
  @ViewChild('animationContainer', {static: true}) private animationContainer!: ElementRef;
  
  constructor(
    private renderer: Renderer2,
    private host: ElementRef<HTMLElement>) {

  }

  ngOnInit() {
    const animationElement = this.animationContainer.nativeElement;
  
    animationElement.addEventListener('animationend', () => {
      this.host.nativeElement.remove();

      const background: HTMLElement | null = document.querySelector("div#background");
      if (background) {
        background.style.backgroundColor = "#4AA3FF";
      }
    });
  }
}

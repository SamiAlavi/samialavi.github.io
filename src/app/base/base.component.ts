import { Component } from '@angular/core';
import { tsParticles } from "tsparticles-engine";

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent {
  backgroundColor = "#000";
  isSplashScreenVisible = true;

  constructor() {

  }

  splashScreenDestroyed(isDestroyed: boolean) {
    this.backgroundColor = "#4AA3FF";
    this.isSplashScreenVisible = false;
  }
}

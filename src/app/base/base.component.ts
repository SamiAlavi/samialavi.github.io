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

  isSplashScreenDestroyed(event: boolean) {
    this.isSplashScreenVisible = false;
  }
}

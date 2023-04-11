import { Component } from '@angular/core';
import { Gradient } from '../helpers/Gradient.js';

@Component({
  selector: 'app-mesh-gradient',
  templateUrl: './mesh-gradient.component.html',
  styleUrls: ['./mesh-gradient.component.scss'],
})
export class MeshGradientComponent {

  constructor() {
  }

  ngAfterViewInit() {    
    const gradient: any = new Gradient()
  
    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas');
  }
}

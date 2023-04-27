import { Component } from '@angular/core';
import { GradientWrapper } from '../helpers/Gradient/gradient-wrapper';

@Component({
    selector: 'app-mesh-gradient',
    templateUrl: './mesh-gradient.component.html',
    styleUrls: ['./mesh-gradient.component.scss'],
})
export class MeshGradientComponent {

    private debug = false;

    constructor() {
    }

    ngAfterViewInit() {
        const gradientWrapper = new GradientWrapper();

        // Call `initGradient` with the selector to your canvas
        gradientWrapper.initGradient('#gradient-canvas');

        if (this.debug) {
            (window as any).gradient = gradientWrapper;
        }
    }
}

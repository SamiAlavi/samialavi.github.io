import { Component } from '@angular/core';
import { GradientWrapper } from '../helpers/Gradient/gradient-wrapper';
import { EventEmitterService } from '../services/event-emitter.service';

@Component({
    selector: 'app-mesh-gradient',
    templateUrl: './mesh-gradient.component.html',
    styleUrls: ['./mesh-gradient.component.scss'],
})
export class MeshGradientComponent {

    private debug = false;
    private gradientWrapper!: GradientWrapper;

    constructor(private eventEmitterService: EventEmitterService) {
        this.subscribeEvents();
    }

    ngAfterViewInit() {
        this.gradientWrapper = new GradientWrapper();

        // Call `initGradient` with the selector to your canvas
        this.gradientWrapper.initGradient('#gradient-canvas');

        if (this.debug) {
            (window as any).gradient = this.gradientWrapper;
        }
    }

    private subscribeEvents() {
        this.eventEmitterService.gradientPause.subscribe(this.gradientPause);
        this.eventEmitterService.gradientStart.subscribe(this.gradientStart);
    }

    private gradientPause = () => {
        this.gradientWrapper.pause();
    }

    private gradientStart = () => {
        this.gradientWrapper.play();
    }


}

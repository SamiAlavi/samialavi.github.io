import { Component, Input } from '@angular/core';
import { GradientWrapper } from '../helpers/Gradient/gradient-wrapper';
import { EventEmitterService } from '../services/event-emitter.service';
import { gradientCssDefaultColors, gradientCssVariables } from '../helpers/variables';

@Component({
    selector: 'app-mesh-gradient',
    templateUrl: './mesh-gradient.component.html',
    styleUrls: ['./mesh-gradient.component.scss'],
})
export class MeshGradientComponent {

    private debug = false;
    private gradientWrapper!: GradientWrapper;
    @Input() divId!: string;
    @Input() subscribe!: boolean;
    @Input() isStatic!: boolean;

    constructor(private eventEmitterService: EventEmitterService) {
    }

    ngOnInit() {
        if (this.subscribe) {
            this.subscribeEvents();
            this.syncGradientColors();
        }
    }

    private syncGradientColors() {
        const root = document.documentElement;
        gradientCssVariables.forEach((cssVariable, index) => {
            const cachedColor = localStorage.getItem(cssVariable) ?? gradientCssDefaultColors[index];
            root.style.setProperty(cssVariable, cachedColor);
        });
    }

    ngAfterViewInit() {
        const selectorDivId = `#${this.divId}`;
        this.gradientWrapper = new GradientWrapper(this.isStatic);

        // Call `initGradient` with the selector to your canvas
        this.gradientWrapper.initGradient(selectorDivId);

        if (this.debug) {
            (window as any).gradient = this.gradientWrapper;
        }
    }

    private subscribeEvents() {
        this.eventEmitterService.gradientPause.subscribe(this.gradientPause);
        this.eventEmitterService.gradientStart.subscribe(this.gradientStart);
        this.eventEmitterService.gradientUpdateColors.subscribe(this.gradientUpdateColors)
    }

    private gradientPause = () => {
        this.gradientWrapper.pause();
    }

    private gradientStart = () => {
        this.gradientWrapper.play();
    }

    private gradientUpdateColors = (hexCodes: [string, string, string, string]) => {
        this.gradientWrapper.setColors(hexCodes);
    }

    setColorAtIndex(index: number, hexCode: string) {
        this.gradientWrapper.setColorAtIndex(index, hexCode);
    }


}

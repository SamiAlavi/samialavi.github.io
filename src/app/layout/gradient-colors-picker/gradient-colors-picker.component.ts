import { Component, ViewChild } from '@angular/core';
import { MeshGradientComponent } from 'src/app/mesh-gradient/mesh-gradient.component';

@Component({
    selector: 'app-gradient-colors-picker',
    templateUrl: './gradient-colors-picker.component.html',
    styleUrls: ['./gradient-colors-picker.component.scss']
})
export class GradientColorsPickerComponent {
    @ViewChild("meshGradientPreview", { static: true }) meshGradientPreview !: MeshGradientComponent;
    hexCodes: string[] = [];

    constructor() {
        const cssVariables = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4"];
        const computedStyle = getComputedStyle(document.documentElement);

        this.hexCodes = cssVariables.map((cssVariable) => computedStyle.getPropertyValue(cssVariable).trim().toUpperCase());
        console.log(this.hexCodes)
    }

    ngAfterViewInit() {
    }

    updateColor(index: number, hexCode: string) {
        hexCode = hexCode.toUpperCase();
        this.meshGradientPreview.setColorAtIndex(index, hexCode);
    }
}

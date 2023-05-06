import { Component, ViewChild } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MeshGradientComponent } from 'src/app/mesh-gradient/mesh-gradient.component';


@Component({
    selector: 'app-gradient-colors-picker',
    templateUrl: './gradient-colors-picker.component.html',
    styleUrls: ['./gradient-colors-picker.component.scss']
})
export class GradientColorsPickerComponent {
    @ViewChild("meshGradientPreview", { static: true }) meshGradientPreview !: MeshGradientComponent;

    private cssVariables = ["--gradient-color-1", "--gradient-color-2", "--gradient-color-3", "--gradient-color-4"];
    hexCodes: string[] = [];
    updatedHexCodes: string[] = [];

    constructor(private ref: DynamicDialogRef) {
        const computedStyle = getComputedStyle(document.documentElement);

        this.hexCodes = this.cssVariables.map((cssVariable) => computedStyle.getPropertyValue(cssVariable).trim().toUpperCase());
        this.updatedHexCodes = this.hexCodes.map((hexCode) => hexCode);
        console.log(this.hexCodes)
    }

    ngAfterViewInit() {
    }

    updateColor(index: number, hexCode: string) {
        hexCode = hexCode.toUpperCase();
        this.updatedHexCodes[index] = hexCode;
        this.meshGradientPreview.setColorAtIndex(index, hexCode);
    }

    ngOnDestroy() {
        this.ref.close({
            updatedHexCodes: this.updatedHexCodes,
            cssVariables: this.cssVariables,
        });
    }
}

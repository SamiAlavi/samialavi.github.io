import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GradientColorsPickerComponent } from '../gradient-colors-picker/gradient-colors-picker.component';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { gradientCssVariables } from 'src/app/helpers/variables';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [DialogService]
})
export class HeaderComponent {
    constructor(private dialogService: DialogService, private eventEmitterService: EventEmitterService) {
    }

    showGradientColorsPickerDialog() {
        this.eventEmitterService.gradientPause.emit();

        const ref = this.dialogService.open(GradientColorsPickerComponent, {
            header: 'Gradient Colors Picker',
            width: '70%',
            height: '70%',
            contentStyle: { overflow: 'hidden' },
            baseZIndex: 10000,
            maximizable: false
        });

        ref.onClose.subscribe(this.onGradientColorsPickerDialogClose);
    }

    private onGradientColorsPickerDialogClose = (value: any) => {
        if (value) {
            const updatedHexCodes: [string, string, string, string] = value.updatedHexCodes;
            this.eventEmitterService.gradientStart.emit();
            this.eventEmitterService.gradientUpdateColors.emit(updatedHexCodes);

            const root = document.documentElement;
            updatedHexCodes.forEach((hexCode, index) => {
                root.style.setProperty(gradientCssVariables[index], hexCode);
                localStorage.setItem(gradientCssVariables[index], hexCode);
            })
        }
    }
}

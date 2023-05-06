import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GradientColorsPickerComponent } from '../gradient-colors-picker/gradient-colors-picker.component';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    providers: [DialogService]
})
export class HeaderComponent {
    private ref!: DynamicDialogRef;

    constructor(private dialogService: DialogService, private eventEmitterService: EventEmitterService) {
    }

    showGradientColorsPickerDialog() {
        this.eventEmitterService.gradientPause.emit();

        this.ref = this.dialogService.open(GradientColorsPickerComponent, {
            header: 'Gradient Colors Picker',
            width: '70%',
            height: '70%',
            contentStyle: { overflow: 'hidden' },
            baseZIndex: 10000,
            maximizable: false
        });

        this.ref.onClose.subscribe(this.onGradientColorsPickerDialogClose);
    }

    private onGradientColorsPickerDialogClose = () => {
        this.eventEmitterService.gradientStart.emit();
    }
}

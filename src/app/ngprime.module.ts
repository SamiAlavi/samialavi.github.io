import { NgModule } from '@angular/core';

import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ColorPickerModule } from 'primeng/colorpicker';


@NgModule({
    exports: [
        SplitterModule,
        CardModule,
        ButtonModule,
        DynamicDialogModule,
        ColorPickerModule,
    ],
})
export class NgPrimeModule { }
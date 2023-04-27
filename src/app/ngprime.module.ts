import { NgModule } from '@angular/core';

import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
    exports: [
        SplitterModule,
        CardModule,
        ButtonModule,
    ],
})
export class NgPrimeModule { }
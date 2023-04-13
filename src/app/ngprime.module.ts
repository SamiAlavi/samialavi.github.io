import { NgModule } from '@angular/core';

import { SplitterModule } from 'primeng/splitter';
import { CardModule } from 'primeng/card';


@NgModule({
  exports: [
    SplitterModule,
    CardModule,
  ],
})
export class NgPrimeModule {}
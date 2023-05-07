import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradientColorsPickerComponent } from './gradient-colors-picker.component';

describe('GradientColorsPickerComponent', () => {
    let component: GradientColorsPickerComponent;
    let fixture: ComponentFixture<GradientColorsPickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GradientColorsPickerComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(GradientColorsPickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

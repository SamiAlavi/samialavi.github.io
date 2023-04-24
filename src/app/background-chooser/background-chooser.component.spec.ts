import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundChooserComponent } from './background-chooser.component';

describe('BackgroundChooserComponent', () => {
  let component: BackgroundChooserComponent;
  let fixture: ComponentFixture<BackgroundChooserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundChooserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

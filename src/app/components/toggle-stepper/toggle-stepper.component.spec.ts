import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleStepperComponent } from './toggle-stepper.component';

describe('ToggleStepperComponent', () => {
  let component: ToggleStepperComponent;
  let fixture: ComponentFixture<ToggleStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

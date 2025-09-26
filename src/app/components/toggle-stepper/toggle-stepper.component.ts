import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-stepper',
  imports: [CommonModule],
  templateUrl: './toggle-stepper.component.html',
  styleUrl: './toggle-stepper.component.scss'
})
export class ToggleStepperComponent {
  selectedItem = 1
  steps = [
    {
      key: 1,
      value: 'Digital Product'
    }, {
      key: 2,
      value: '1:1 Call'
    },

    {
      key: 3,
      value: 'Package'
    }
  ]
}

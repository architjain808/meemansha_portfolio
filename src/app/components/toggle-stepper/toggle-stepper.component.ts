import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-stepper',
  imports: [CommonModule],
  templateUrl: './toggle-stepper.component.html',
  styleUrl: './toggle-stepper.component.scss'
})
export class ToggleStepperComponent implements OnInit {

  @Output() stepChange = new EventEmitter<number>()

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

  ngOnInit(): void {
    this.stepChange.emit(1)

  }

  stepperChange(step: number) {
    this.selectedItem = step
    this.stepChange.emit(step)
  }
}

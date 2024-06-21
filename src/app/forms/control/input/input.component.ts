import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
//https://medium.com/@bohndez.dev/custom-form-control-con-control-value-accessor-en-angular-5-6-o-7-f8f4030f105d
@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  id = input.required<string>()
  label = input.required<string>()
  form = input.required<FormGroup>()
}


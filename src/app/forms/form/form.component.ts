import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { suppressNull } from '../../util/suprressnull';
import { InputComponent } from '../control/input/input.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  //https://blog.angular-university.io/angular-custom-validators/
   form = new FormGroup({
     name: new FormControl('Pedro'),
     phone: new FormControl(undefined),
     address:new FormGroup({
       number:new FormControl('')
     })
   });

   submit(ev:Event){

    //ev.preventDefault();
    console.log(JSON.stringify(suppressNull(this.form.value)))
   }
}

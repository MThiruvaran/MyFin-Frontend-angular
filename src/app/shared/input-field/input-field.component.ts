import { CommonModule } from '@angular/common';
import { Component,Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css'
})
export class InputFieldComponent {

 @Input() control: FormControl = new FormControl()
 @Input() type:string = "text"
 @Input() placeholder:string = ""
 @Input() label:string = ""

}

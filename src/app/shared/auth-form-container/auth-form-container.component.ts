import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-form-container',
  standalone: true,
  imports: [],
  templateUrl: './auth-form-container.component.html',
  styleUrl: './auth-form-container.component.css'
})
export class AuthFormContainerComponent {
  @Input() title:string=""

}

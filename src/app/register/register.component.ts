import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { InputFieldComponent } from '../shared/input-field/input-field.component';
import { AuthFormContainerComponent } from '../shared/auth-form-container/auth-form-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent,AuthFormContainerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  fullname = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  registerForm = new FormGroup({
    fullname: this.fullname,
    email: this.email,
    password: this.password,
  });

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/user-dashboard'])
    }
}

  constructor(private authService: AuthService,private router:Router) {}

  async onSubmit() {
    if (this.registerForm.valid) {
      try {
        const formData = { role: 'customer', ...this.registerForm.value };
        const response = await this.authService.register(formData); // Await the promise response
        console.log('Registration successful:', response);
      } catch (error) {
        console.error('Registration error:', error);
      }
    }
  }
}

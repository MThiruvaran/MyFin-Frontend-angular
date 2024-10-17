import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { InputFieldComponent } from '../shared/input-field/input-field.component';
import { CommonModule } from '@angular/common';
import { AuthFormContainerComponent } from '../shared/auth-form-container/auth-form-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputFieldComponent, CommonModule, AuthFormContainerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  loginForm = new FormGroup({
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
    if (this.loginForm.valid) {
      try {
        const formdata = this.loginForm.value;
        const response = await this.authService.login(formdata);
        console.log(response);
        sessionStorage.setItem('token',response.token)
      } catch (error) {
        console.log('Login error: ', error);
      }
    }
  }
}

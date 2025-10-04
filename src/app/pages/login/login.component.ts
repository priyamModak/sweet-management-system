import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  loginForm: FormGroup;
  errorMessage: string = '';
  isLoggedIn: boolean = false;
  showPassword: boolean = false;
  roles: string[] = ['admin', 'user'];
  loading: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['user', Validators.required]
    });
    this.isLoggedIn = !!localStorage.getItem('isLoggedIn');
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.loading = true;
    const { username, password, role } = this.loginForm.value;
    setTimeout(() => {
      if ((role === 'admin' && username === 'admin' && password === 'admin123') ||
          (role === 'user' && username === 'user' && password === 'user123')) {
        localStorage.setItem('isLoggedIn', 'true');
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
      } else {
        this.errorMessage = 'Invalid credentials';
      }
      this.loading = false;

    }, 1200);
  }

  onLogin() {
    this.onSubmit();
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }
}

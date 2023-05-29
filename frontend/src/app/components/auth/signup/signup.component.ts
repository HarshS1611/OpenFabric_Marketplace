import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    const credentials = this.signupForm.value;
    this.authService.signup(credentials).subscribe(
      (response) => {
        // Handle successful signup
        console.log('Signup successful:', response);
        localStorage.setItem("userProfile", JSON.stringify(response));
        this.authService.setIsLoggedIn(true);
        alert('Signin successful');
        this.router.navigate(['/']);
      },
      (error) => {
        // Handle signup error
        console.error('Signup failed:', error);
        alert(error.error.message)
      }
    );
  }
}

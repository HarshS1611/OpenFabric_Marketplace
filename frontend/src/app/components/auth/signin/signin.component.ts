import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
     
    });
  }

  onSubmit() {
    console.log(this.signinForm.value);
    const credentials = this.signinForm.value;
    this.authService.signin(credentials).subscribe(
      (response) => {
        // Handle successful signup
        console.log('Signin successful:', response);
        localStorage.setItem("userProfile", JSON.stringify(response));
      },
      (error) => {
        // Handle signup error
        console.error('Signin failed:', error);
      }
    );
  }
}

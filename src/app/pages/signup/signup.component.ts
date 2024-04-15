import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {username: string = '';
email: string = '';
password: string = '';
confirmPassword: string = '';

constructor() {}

signup() {
  // Implement sign-up logic here
  if (this.password !== this.confirmPassword) {
    console.log('Passwords do not match');
    // You can display an error message to the user
  } else {
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Send the sign-up data to the server or perform further actions
  }
}
}
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  customer: Customer = new Customer();
  registerMessage: string = '';
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
    if (this.selectedImage) {
      this.customer.displayImage = this.selectedImage.name; // Store the file name as the address
    }
  }
  
  onSubmit(){
    alert("WOrking")
  }
  onRegisterSubmit(){
    this.http.post('http://localhost:18080/api/customer/register-customer', this.customer, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.registerMessage = response;
        if (response === 'Registration successful') {
          console.log('Response:', response);
          this.router.navigate(['/login']);
          alert("Registered Successfully.")
        }
      },
      (error) => {
        this.registerMessage = 'Registration failed';
        console.error('Error:', error);
        alert("Failed.")
      }
    );
  }
}

import { Component } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
  customer: Customer = new Customer();
  registerMessage: string = '';
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router:Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
    if (this.selectedImage) {
      this.customer.displayImage = this.selectedImage.name;
    }
  }

  onSubmit(){
    this.http.post('http://localhost:18080/api/customer/register-customer', this.customer, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.registerMessage = response;
        if (response === 'Registration successful') {
          this.router.navigate(['/manage-customers']);
          alert("Success.")
        }
      }
    );
  }

}

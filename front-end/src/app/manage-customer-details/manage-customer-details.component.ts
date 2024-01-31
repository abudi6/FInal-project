import { Component, Input } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-manage-customer-details',
  templateUrl: './manage-customer-details.component.html',
  styleUrls: ['./manage-customer-details.component.css']
})
export class ManageCustomerDetailsComponent {
  @Input() selectedCustomer: Customer = new Customer();
  editMode: boolean = false;
  newDisplayImage: File | undefined = undefined;

  constructor(private http:HttpClient, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.route.params.subscribe((params) => {
      const customerId = params['id'];
      if (customerId) {
        this.loadCustomerDetails(customerId);
      }
    });
  }

  loadCustomerDetails(customerId: string){
    this.http.get<Customer>(`http://localhost:18080/api/customer/get-customer/id/${customerId}`).subscribe(
      (customer: Customer) => {
        this.selectedCustomer = customer;
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newDisplayImage = file;
  }

  toggleEditMode(){
    this.editMode = !this.editMode;
  };

  saveChanges() {
    const updatedCustomer = {
      id: this.selectedCustomer.id,
      firstName: this.selectedCustomer.firstName,
      lastName: this.selectedCustomer.lastName,
      displayImage: this.selectedCustomer.displayImage,
      email: this.selectedCustomer.email,
      password: this.selectedCustomer.password,
      phoneNumber: this.selectedCustomer.phoneNumber,
      homeAddress: this.selectedCustomer.homeAddress
    }

    if (this.newDisplayImage){
      updatedCustomer.displayImage = this.newDisplayImage.name;
    }

    this.http.put(`http://localhost:18080/api/customer/update-customer/${updatedCustomer.id}`, updatedCustomer)
      .subscribe(
        (response:any) => {
          this.toggleEditMode(); 
          alert("Changes saved.")
          window.location.reload();
        }
      );
  }

  deleteRecord() {
    if (!this.selectedCustomer || !this.selectedCustomer.id) {
      console.error('Invalid customer record');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this Customer record?');

    if (!confirmed) {
      return;
    }

    const customerId = this.selectedCustomer.id;

    this.http.delete(`http://localhost:18080/api/customer/delete-customer/${customerId}`).subscribe(
    (response: any) => {
      console.log('Customer record deleted:', response);
      this.router.navigate(['/manage-customers'])
    }
  );
  }

}

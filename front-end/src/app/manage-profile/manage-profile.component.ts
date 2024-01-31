import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Customer } from '../model/customer';

@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.css']
})
export class ManageProfileComponent implements OnInit {
  customer: Customer = new Customer();
  @Input() selectedCustomer: Customer = new Customer();
  newDisplayImage: File | undefined = undefined;
  editMode: boolean = false;


  constructor(private http: HttpClient) {}

  ngOnInit(){
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.http.get(`http://localhost:18080/api/customer/get-customer/id/${userId}`)
        .subscribe((data: any) => {
          this.customer = data; 
          this.loadCustomerDetails();
        });
    }
  }

  loadCustomerDetails(){
    this.selectedCustomer = this.customer;
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

}

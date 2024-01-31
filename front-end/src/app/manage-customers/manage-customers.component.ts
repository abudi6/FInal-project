import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent implements OnInit {
  searchQuery: string = '';
  filterType: string = 'fullName';
  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  selectedCustomer: Customer = new Customer();

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(){
    this.fetchCustomers();
  }
  
  fetchCustomers(){
    this.http.get<Customer[]>('http://localhost:18080/api/customer/all-customer')
      .subscribe((customers) => {
        this.customers = customers;
      });
  }

  navigateToCustomerDetails(customer:Customer) {
    const customerId = customer.id;
    this.router.navigate(['/manage-customer-details', customerId]);
  }

  navigateToAddCustomer(){
    this.router.navigate(['/add-customer']);
  }

  applyFilter() {
    if (this.searchQuery == '' || null){
      window.location.reload();
    }
    else if (this.filterType === 'fullName') {
      this.getCustomersByName(this.searchQuery);
    } else if (this.filterType === 'email') {
      this.getCustomersByEmail(this.searchQuery);
    } else if (this.filterType === 'phoneNumber') {
      this.getCustomersByPhone(this.searchQuery);
    }
  }
  
  getCustomersByName(fullName: string) {
    this.http.get<any[]>(`http://localhost:18080/api/customer/get-customer/name/${fullName}`)
      .subscribe(
        (customers) => {
          this.customers = customers;
        }
      );
  }
  
  getCustomersByEmail(email: string) {
    this.http.get<any[]>(`http://localhost:18080/api/customer/get-customer/email/${email}`)
      .subscribe(
        (customers) => {
          this.customers = customers;
        }
      );
  }
  
  getCustomersByPhone(phone: string) {
    this.http.get<any[]>(`http://localhost:18080/api/customer/get-customer/phone/${phone}`)
      .subscribe(
        (customers) => {
          this.customers = customers;
        }
      );
  }

}

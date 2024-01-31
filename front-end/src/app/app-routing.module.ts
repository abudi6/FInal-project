import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowCarsComponent } from './show-cars/show-cars.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShowCarDetailsComponent } from './show-car-details/show-car-details.component';
import { ShowApplicationsComponent } from './show-applications/show-applications.component';
import { ShowApplicationDetailsComponent } from './show-application-details/show-application-details.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ManageCarDetailsComponent } from './manage-car-details/manage-car-details.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageCustomerDetailsComponent } from './manage-customer-details/manage-customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { ManageApplicationDetailsComponent } from './manage-application-details/manage-application-details.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home-page', pathMatch:'full'},
  { path: 'home-page', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'show-cars', component: ShowCarsComponent},
  { path: 'show-car-details/:id', component: ShowCarDetailsComponent },
  { path: 'show-applications', component: ShowApplicationsComponent },
  { path: 'show-application-details/:id', component: ShowApplicationDetailsComponent },
  { path: 'manage-profile', component: ManageProfileComponent },
  { path: 'manage-cars', component: ManageCarsComponent },
  { path: 'manage-car-details/:id', component: ManageCarDetailsComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'manage-customers', component: ManageCustomersComponent },
  { path: 'manage-customer-details/:id', component: ManageCustomerDetailsComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'manage-applications', component: ManageApplicationsComponent },
  { path: 'manage-application-details/:id', component: ManageApplicationDetailsComponent },
  { path: 'about-page', component: AboutPageComponent },
  { path: 'support-page', component: SupportPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

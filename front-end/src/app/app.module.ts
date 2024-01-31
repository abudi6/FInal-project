import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ShowCarsComponent } from './show-cars/show-cars.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ManageCarsComponent } from './manage-cars/manage-cars.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageApplicationsComponent } from './manage-applications/manage-applications.component';
import { ShowCarDetailsComponent } from './show-car-details/show-car-details.component';
import { ShowApplicationsComponent } from './show-applications/show-applications.component';
import { ShowApplicationDetailsComponent } from './show-application-details/show-application-details.component';
import { AddCarComponent } from './add-car/add-car.component';
import { ManageCarDetailsComponent } from './manage-car-details/manage-car-details.component';
import { ManageCustomerDetailsComponent } from './manage-customer-details/manage-customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ManageApplicationDetailsComponent } from './manage-application-details/manage-application-details.component';
import { SupportPageComponent } from './support-page/support-page.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavBarComponent,
    HomePageComponent,
    AboutPageComponent,
    ShowCarsComponent,
    LoginComponent,
    RegisterComponent,
    ManageCarsComponent,
    ManageCustomersComponent,
    ManageApplicationsComponent,
    ShowCarDetailsComponent,
    ShowApplicationsComponent,
    ShowApplicationDetailsComponent,
    AddCarComponent,
    ManageCarDetailsComponent,
    ManageCustomerDetailsComponent,
    AddCustomerComponent,
    ManageApplicationDetailsComponent,
    SupportPageComponent,
    ManageProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

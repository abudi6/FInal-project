import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-show-application-details',
  templateUrl: './show-application-details.component.html',
  styleUrls: ['./show-application-details.component.css'],
})
export class ShowApplicationDetailsComponent {
  @Input() selectedCar: Car = new Car();

  constructor(private http:HttpClient, private route: ActivatedRoute, private authService: AuthService, private router: Router) {
    this.route.params.subscribe((params) => {
      const carId = params['id'];
      if (carId) {
        this.loadCarDetails(carId);
      }
    });
  }

  loadCarDetails(carId: string) {
    this.http.get<Car>(`http://localhost:18080/api/car/get-car/id/${carId}`).subscribe(
      (car: Car) => {
        this.selectedCar = car;
      },
      (error) => {
        console.error('Failed to load car details:', error);
      }
    );
  }
}

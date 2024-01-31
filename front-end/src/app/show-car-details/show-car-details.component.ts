import { Component, Input } from '@angular/core';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Application } from '../model/application';

@Component({
  selector: 'app-show-car-details',
  templateUrl: './show-car-details.component.html',
  styleUrls: ['./show-car-details.component.css']
})
export class ShowCarDetailsComponent {
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

  adoptCar(selectedCar: Car){
    const userId = this.authService.getUserId();

    const rentRequest = {
      applicant: {
        id: userId,
      },
      car: {
        id: selectedCar.id,
      },
    };

    this.http.post('http://localhost:18080/api/application/submit', rentRequest).subscribe(
    (response: any) => {
      console.log('Rent successful:', response);
      this.router.navigate(['/show-cars']);
    },
    (error) => {
      console.error('Rent failed:', error);
    }
  );

  }

}

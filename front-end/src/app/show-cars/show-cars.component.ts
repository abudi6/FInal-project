import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../model/car';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-show-cars',
  templateUrl: './show-cars.component.html',
  styleUrls: ['./show-cars.component.css']
})
export class ShowCarsComponent implements OnInit {
  cars: Car[] = []; // Property to hold the list of cars
  selectedCar: Car = new Car(); 

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchCars();
  }

  fetchCars() {
    this.http.get<Car[]>('http://localhost:18080/api/car/all-car')
      .subscribe((cars) => {
        this.cars = cars;
      });
  }

  navigateToCarDetails(car: Car) {
    const carId = car.id;
    this.router.navigate(['/show-car-details', carId]); 
  }
}

import { Component, OnInit } from '@angular/core';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-cars',
  templateUrl: './manage-cars.component.html',
  styleUrls: ['./manage-cars.component.css']
})
export class ManageCarsComponent implements OnInit {
  searchQuery: string = '';
  filterType: string = 'name';
  cars: Car[] = [];
  filteredCars: Car[] = [];
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
    this.router.navigate(['/manage-car-details', carId]); 
  }

  navigateToAddCar() {
    this.router.navigate(['/add-car']); 
  }

  applyFilter() {
    if (this.searchQuery == '' || null){
      window.location.reload();
    }
    else if (this.filterType === 'name') {
      this.getCarsByName(this.searchQuery);
    } else if (this.filterType === 'color') {
      this.getCarsByColor(this.searchQuery);
    } else if (this.filterType === 'size') {
      this.getCarsBySize(this.searchQuery);
    }else if (this.filterType === 'status') {
      this.getCarsByStatus(this.searchQuery);
    }
    
  }

  getCarsByName(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/car/get-car/name/${name}`)
      .subscribe(
        (cars) => {
          console.log('Cars by Name:', cars);
          this.cars = cars;
          this.router.navigate(['/manage-cars']);
        },
        (error) => {
          console.error('Failed to get cars by name:', error);
        }
      );
  }

  getCarsByColor(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/car/get-car/color/${name}`)
      .subscribe(
        (cars) => {
          console.log('Cars by Name:', cars);
          this.cars = cars;
          this.router.navigate(['/manage-cars']);
        },
        (error) => {
          console.error('Failed to get cars by name:', error);
        }
      );
  }
  getCarsBySize(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/car/get-car/size/${name}`)
      .subscribe(
        (cars) => {
          console.log('Cars by Name:', cars);
          this.cars = cars;
          this.router.navigate(['/manage-cars']);
        },
        (error) => {
          console.error('Failed to get cars by name:', error);
        }
      );
  }
  getCarsByStatus(name: string) {
    this.http.get<any[]>(`http://localhost:18080/api/car/get-car/status/${name}`)
      .subscribe(
        (cars) => {
          console.log('Cars by Name:', cars);
          this.cars = cars;
          this.router.navigate(['/manage-cars']);
        },
        (error) => {
          console.error('Failed to get cars by name:', error);
        }
      );
  }
}
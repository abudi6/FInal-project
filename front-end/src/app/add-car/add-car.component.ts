import { Component } from '@angular/core';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  car: Car = new Car();
  selectedImage: File | null = null;

  constructor(private http: HttpClient, private router:Router) {}

  onFileSelected(event: any) {
    this.selectedImage = event.target.files[0] as File;
    if (this.selectedImage) {
      this.car.displayImage = this.selectedImage.name; 
    }
  }

  onSubmit() {
    this.http.post('http://localhost:18080/api/car/register-car', this.car).subscribe(
      (response: any) => {
        console.log('Car added successfully:', response);
        alert("Success")
        this.router.navigate(['/manage-cars']);
      }
    );
  }
}

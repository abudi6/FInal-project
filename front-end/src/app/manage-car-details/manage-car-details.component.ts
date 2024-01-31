import { Component, Input } from '@angular/core';
import { Car } from '../model/car';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-manage-car-details',
  templateUrl: './manage-car-details.component.html',
  styleUrls: ['./manage-car-details.component.css']
})
export class ManageCarDetailsComponent {
  @Input() selectedCar: Car = new Car();
  editMode: boolean = false;
  newDisplayImage: File | undefined = undefined;

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
      }
    );
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.newDisplayImage = file;
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    const updatedCar = {
      id: this.selectedCar.id,
      name: this.selectedCar.name,
      brand: this.selectedCar.brand,
      age: this.selectedCar.age,
      status: this.selectedCar.status,
      manuDate: this.selectedCar.manuDate,
      color: this.selectedCar.color,
      size: this.selectedCar.size,
      description: this.selectedCar.description,
      displayImage: this.selectedCar.displayImage
    };

    if (this.newDisplayImage) {
      updatedCar.displayImage = this.newDisplayImage.name; 
    }

    this.http.put(`http://localhost:18080/api/car/update-car/${updatedCar.id}`, updatedCar)
    .subscribe(
      (response: any) => {
        this.toggleEditMode(); 
        alert("Changes saved.")
        window.location.reload();
      }
    );


  }

  deleteRecord() {
    if (!this.selectedCar || !this.selectedCar.id) {
      console.error('Invalid car record');
      return;
    }

    const confirmed = window.confirm('Are you sure you want to delete this car record?');

    if (!confirmed) {
      return;
    }

    const carId = this.selectedCar.id;

    this.http.delete(`http://localhost:18080/api/car/delete-car/${carId}`).subscribe(
    (response: any) => {
      console.log('Car record deleted:', response);
      this.router.navigate(['/manage-cars'])
    }
  );
  }
}

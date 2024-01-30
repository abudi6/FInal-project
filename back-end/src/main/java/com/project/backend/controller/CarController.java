package com.project.backend.controller;

import com.project.backend.model.Car;
import com.project.backend.service.CarService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/car")
public class CarController {
    @Autowired
    private CarService carService;

    @PostMapping("/register-car")
    public Car registerCar(@RequestBody Car car) {
        return carService.registerCar(car);
    }
    @PutMapping("/update-car/{carId}")
    public Car updateCar(@PathVariable int carId, @RequestBody Car update) {
        return carService.updateCar(carId, update);
    }
    @DeleteMapping("/delete-car/{carId}")
    public void deleteCar(@PathVariable int carId) {
        carService.deleteCar(carId);
    }
    @GetMapping("/get-car/id/{id}")
    public Car getCarById(@PathVariable int id) {
        return carService.getCarById(id);
    }
    @GetMapping("/get-car/name/{name}")
    public List<Car> getCarsByName(@PathVariable String name) {
        return carService.getCarsByName(name);
    }
    @GetMapping("/get-car/brand/{brand}")
    public List<Car> getCarsByBrand(@PathVariable String brand) {
        return carService.getCarsByBrand(brand);
    }
    @GetMapping("/get-car/status/{status}")
    public List<Car> getCarsByStatus(@PathVariable String status) {
        return carService.getCarsByStatus(status);
    }
    @GetMapping("/all-car")
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }


}

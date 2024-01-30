package com.project.backend.service;

import com.project.backend.model.Customer;
import com.project.backend.model.Application;
import com.project.backend.model.Car;
import com.project.backend.repository.CarRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CarService {
    @Autowired
    CarRepository carRepository;

    @Autowired
    ApplicationService applicationService;

    public Car registerCar(Car car){
        car.setRegisteredDate(new Date());
        car.setAge(car.getManuDate());
        car.setStatus("Open");
        return carRepository.save(car);
    }

    public Car updateCar(int carId, Car update){
        Optional<Car> existingOptional = carRepository.findById(carId);

        if(existingOptional.isPresent()){
            Car existing = existingOptional.get();

            if(update.getName()!=null){
                existing.setName(update.getName());
            }
            if(update.getDisplayImage()!=null){
                existing.setDisplayImage(update.getDisplayImage());
            }
            if(update.getBrand()!=null){
                existing.setBrand(update.getBrand());
            }
            if(update.getManuDate()!=null){
                existing.setManuDate(update.getManuDate());
                existing.setAge(update.getManuDate());
            }
            if(update.getColor()!=null){
                existing.setColor(update.getColor());
            }
            if(update.getSize()!=null){
                existing.setSize(update.getSize());
            }
            if(update.getStatus()!=null){
                existing.setStatus(update.getStatus());
            }
            if(update.getDescription()!=null){
                existing.setDescription(update.getDescription());
            }
            if(update.getApplication()!=null){
                existing.setApplication(update.getApplication());
            }

            return carRepository.save(existing);
        } else{
            return null;
        }
    }

    public void deleteCar(int carId) {
        Car car = carRepository.findById(carId).orElse(null);

        Application application = car.getApplication();

        // Delete each associated application
        if(application != null){
                applicationService.deleteApplication(application.getId());
        }
        carRepository.deleteById(carId);
    }

    public List<Car> getAllCars(){ return (List<Car>) carRepository.findAll(); }

    public Car getCarById(int id) {
        return carRepository.findById(id).orElse(null);
    }

    public List<Car> getCarsByName(String name) {
        return carRepository.findByName(name);
    }

    public List<Car> getCarsByColor(String color) {
        return carRepository.findByColor(color);
    }

    public List<Car> getCarsByStatus(String status) {
        return carRepository.findByStatus(status);
    }
    public List<Car> getCarsByBrand(String brand) {
        return carRepository.findByBrand(brand);
    }


}

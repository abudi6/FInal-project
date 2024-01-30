package com.project.backend.controller;

import com.project.backend.model.Car;
import com.project.backend.service.DogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api/dog")
public class DogController {
    @Autowired
    private DogService dogService;

    @PostMapping("/register-dog")
    public Car registerDog(@RequestBody Car dog) {
        return dogService.registerDog(dog);
    }
    @PutMapping("/update-dog/{dogId}")
    public Car updateDog(@PathVariable int dogId, @RequestBody Car update) {
        return dogService.updateDog(dogId, update);
    }
    @DeleteMapping("/delete-dog/{dogId}")
    public void deleteDog(@PathVariable int dogId) {
        dogService.deleteDog(dogId);
    }
    @GetMapping("/get-dog/id/{id}")
    public Car getDogById(@PathVariable int id) {
        return dogService.getDogById(id);
    }
    @GetMapping("/get-dog/name/{name}")
    public List<Car> getDogsByName(@PathVariable String name) {
        return dogService.getDogsByName(name);
    }
    @GetMapping("/get-dog/gender/{gender}")
    public List<Car> getDogsByGender(@PathVariable String gender) {
        return dogService.getDogsByGender(gender);
    }
    @GetMapping("/get-dog/status/{status}")
    public List<Car> getDogsByAdoptionStatus(@PathVariable String status) {
        return dogService.getDogsByAdoptionStatus(status);
    }
    @GetMapping("/all-dog")
    public List<Car> getAllDogs() {
        return dogService.getAllDogs();
    }


}

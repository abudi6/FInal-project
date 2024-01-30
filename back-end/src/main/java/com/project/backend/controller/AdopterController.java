package com.project.backend.controller;

import ch.qos.logback.classic.Logger;
import com.project.backend.model.Customer;
import com.project.backend.service.AdopterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/adopter")
public class AdopterController {
    @Autowired
    private AdopterService adopterService;

    @PostMapping("/register-adopter")
    public ResponseEntity<String> registerUser(@RequestBody Customer adopter) {
        try {
            // Validate and save the adopter registration data
            adopterService.registerAdopter(adopter);

            // Return a successful response
            return new ResponseEntity<>("Registration successful", HttpStatus.OK);
        } catch (Exception e) {
            // Handle registration error and return an error response
            return new ResponseEntity<>("Registration failed", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-adopter/{adopterId}")
    public Customer updateAdopter(@PathVariable int adopterId, @RequestBody Customer update) {
        return adopterService.updateAdopter(adopterId, update);
    }
    @GetMapping("/get-adopter/id/{adopterId}")
    public Customer getAdopterById(@PathVariable int adopterId) {
        return adopterService.getAdopterById(adopterId);
    }
    @GetMapping("/get-adopter/name/{adopterName}")
    public List<Customer> getAdoptersByName(@PathVariable String adopterName) {
        List<Customer> adoptersByName = new ArrayList<>();
        adoptersByName = adopterService.getAdoptersByName(adopterName);
        return adoptersByName;
    }
    @GetMapping("/get-adopter/email/{adopterEmail}")
    public List<Customer> getAdoptersByEmail(@PathVariable String adopterEmail){
        List<Customer> adoptersByEmail = new ArrayList<>();
        adoptersByEmail = adopterService.getAdoptersByEmail(adopterEmail);
        return adoptersByEmail;
    }
    @GetMapping("/get-adopter/phone/{adopterPhoneNumber}")
    public List<Customer> getAdoptersByPhoneNumber(@PathVariable String adopterPhoneNumber){
        List<Customer> adoptersByPhoneNumber = new ArrayList<>();
        adoptersByPhoneNumber = adopterService.getAdoptersByPhoneNumber(adopterPhoneNumber);
        return adoptersByPhoneNumber;
    }
    @GetMapping("/all-adopter")
    public List<Customer> getAllAdopters() { return adopterService.getAllAdopters(); }
    @DeleteMapping("/delete-adopter/{adopterId}")
    public void deleteAdopter(@PathVariable int adopterId) { adopterService.deleteAdopter(adopterId); }
}

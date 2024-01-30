package com.project.backend.controller;

import ch.qos.logback.classic.Logger;
import com.project.backend.model.Customer;
import com.project.backend.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @PostMapping("/register-customer")
    public ResponseEntity<String> registerUser(@RequestBody Customer customer) {
        try {
            // Validate and save the customer registration data
            customerService.registerCustomer(customer);

            // Return a successful response
            return new ResponseEntity<>("Registration successful", HttpStatus.OK);
        } catch (Exception e) {
            // Handle registration error and return an error response
            return new ResponseEntity<>("Registration failed", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/update-customer/{customerId}")
    public Customer updateCustomer(@PathVariable int customerId, @RequestBody Customer update) {
        return customerService.updateCustomer(customerId, update);
    }
    @GetMapping("/get-customer/id/{customerId}")
    public Customer getCustomerById(@PathVariable int customerId) {
        return customerService.getCustomerById(customerId);
    }
    @GetMapping("/get-customer/name/{customerName}")
    public List<Customer> getCustomersByName(@PathVariable String customerName) {
        List<Customer> customersByName = new ArrayList<>();
        customersByName = customerService.getCustomersByName(customerName);
        return customersByName;
    }
    @GetMapping("/get-customer/email/{customerEmail}")
    public List<Customer> getCustomersByEmail(@PathVariable String customerEmail){
        List<Customer> customersByEmail = new ArrayList<>();
        customersByEmail = customerService.getCustomersByEmail(customerEmail);
        return customersByEmail;
    }
    @GetMapping("/get-customer/phone/{customerPhoneNumber}")
    public List<Customer> getCustomersByPhoneNumber(@PathVariable String customerPhoneNumber){
        List<Customer> customersByPhoneNumber = new ArrayList<>();
        customersByPhoneNumber = customerService.getCustomersByPhoneNumber(customerPhoneNumber);
        return customersByPhoneNumber;
    }
    @GetMapping("/all-customer")
    public List<Customer> getAllCustomers() { return customerService.getAllCustomers(); }
    @DeleteMapping("/delete-customer/{customerId}")
    public void deleteCustomer(@PathVariable int customerId) { customerService.deleteCustomer(customerId); }
}

package com.project.backend.service;

import com.project.backend.model.Admin;
import com.project.backend.model.Customer;
import com.project.backend.model.Application;
import com.project.backend.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ApplicationService applicationService;

    public Customer registerCustomer(Customer customer){
        customer.setFullName();
        customer.setRegisteredDate(new Date());
        return customerRepository.save(customer);
    }
    public Customer updateCustomer(int customerId, Customer update){
        Optional<Customer> existingOptional = customerRepository.findById(customerId);

        if(existingOptional.isPresent()){
            Customer existing = existingOptional.get();

            if(update.getFirstName()!=null){
                existing.setFirstName(update.getFirstName());
            }
            if(update.getLastName()!=null){
                existing.setLastName(update.getLastName());
            }
            if(update.getDisplayImage()!=null){
                existing.setDisplayImage(update.getDisplayImage());
            }
            if(update.getEmail()!=null){
                existing.setEmail(update.getEmail());
            }
            if(update.getPassword()!=null){
                existing.setPassword(update.getPassword());
            }
            if(update.getPhoneNumber()!=null){
                existing.setPhoneNumber(update.getPhoneNumber());
            }
            if(update.getHomeAddress()!=null){
                existing.setHomeAddress(update.getHomeAddress());
            }
            existing.setFullName();
            return customerRepository.save(existing);
        } else{
            return null;
        }
    }
    public void deleteCustomer(int customerId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);

        List<Application> applications = customer.getApplications();

        // Delete each associated application
        if(applications != null && !applications.isEmpty()){
            for (Application application : applications) {
                applicationService.deleteApplication(application.getId());
            }
        }

        customerRepository.deleteById(customerId);

    }
    public List<Customer> getAllCustomers(){ return (List<Customer>) customerRepository.findAll(); }
    public Customer getCustomerById(int customerId) {
        return customerRepository.findById(customerId).orElse(null);
    }
    public List<Customer> getCustomersByName(String customerName){
        return customerRepository.findByName(customerName);
    }
    public List<Customer> getCustomersByEmail(String email) { return customerRepository.findByEmail(email); }
    public List<Customer> getCustomersByPhoneNumber(String phoneNumber) { return customerRepository.findByPhoneNumber(phoneNumber); }

    public Customer getUserByEmail(String email) {
        return customerRepository.findUserByEmail(email);
    }

    public Customer getUserByPassword(String password){
        return customerRepository.findUserByPassword(password);
    }
}

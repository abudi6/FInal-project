package com.project.backend.service;

import com.project.backend.model.Customer;
import com.project.backend.model.Application;
import com.project.backend.model.Car;
import com.project.backend.repository.CustomerRepository;
import com.project.backend.repository.ApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ApplicationService {
    @Autowired
    private ApplicationRepository applicationRepository;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private CarService carService;
    public Application createApplication(Application application) {
        Customer applicant = customerService.getCustomerById(application.getApplicant().getId());
        Car car = carService.getCarById(application.getCar().getId());

        application.setStatus("Submitted");
        application.setApplicant(applicant);

        car.setStatus("Reserved");
        application.setCar(car);

        LocalDateTime currentDateTime = LocalDateTime.now();
        application.setSubmittedDate(currentDateTime);
        return applicationRepository.save(application);
    }

    public Application updateApplication(int applicationId, Application update){
        Optional<Application> existingOptional = applicationRepository.findById(applicationId);
        Application application = applicationRepository.findById(applicationId).orElse(null);
        Car car = carService.getCarById(application.getCar().getId());

        if(existingOptional.isPresent()){
            Application existing = existingOptional.get();

            if (update.getStatus()!=null){
                if(existing.getStatus().equalsIgnoreCase("Under Review" )&& update.getStatus().trim().equalsIgnoreCase("Submitted")){
                    existing.setStatus("Under Review");
                } else if (existing.getStatus().equalsIgnoreCase("Approved" )){
                    existing.setStatus("Approved");
                } else {
                    existing.setStatus(update.getStatus());
                }
            }
            if (update.getReviewDate()!=null){
                existing.setReviewDate(update.getReviewDate());
            } else if (update.getStatus().trim().equalsIgnoreCase("Under Review")){
                car.setStatus("Reserved");
                LocalDateTime currentDateTime = LocalDateTime.now();
                existing.setReviewDate(currentDateTime);
            }
            if (update.getApprovalDate()!=null){
                existing.setApprovalDate(update.getApprovalDate());
            } else if (update.getStatus().trim().equalsIgnoreCase("Approved")){
                car.setStatus("Rented");
                LocalDateTime currentDateTime = LocalDateTime.now();
                existing.setApprovalDate(currentDateTime);
            }
            if (update.getApplicant()!=null){
                existing.setApplicant(update.getApplicant());
            }
            if (update.getCar()!=null){
                existing.setCar(update.getCar());
            }
            existing.setCar(car);
            return applicationRepository.save(existing);
        }else{
            return null;
        }
    }

    public List<Application> getAllApplications() {
        return (List<Application>) applicationRepository.findAll();
    }

    public Application getApplicationById(int id) {
        return applicationRepository.findById(id).orElse(null);
    }

    public List<Application> searchByApplicantName(String applicantName) {
        return applicationRepository.findByApplicantName(applicantName);
    }

    public List<Application> searchByCarName(String carName) {
        return applicationRepository.findByCarName(carName);
    }

    public List<Application> searchByApplicantId(int id) {
        return applicationRepository.findByApplicantId(id);
    }

    public void deleteApplication(int applicationId){
        Application application = applicationRepository.findById(applicationId).orElse(null);
        Car car = carService.getCarById(application.getCar().getId());

        car.setStatus("Open");

        applicationRepository.deleteById(applicationId);
    }

}

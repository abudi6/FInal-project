package com.project.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
@Entity
@Table(name="application")
public class Application {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int id;
    private String status;
    private LocalDateTime submittedDate;
    private LocalDateTime reviewDate;
    private LocalDateTime approvalDate;

    @ManyToOne
    @JoinColumn(name = "applicant_id")
    private Customer applicant;

    @OneToOne
    @JoinColumn(name = "car_id")
    private Car car;

    public Application() {
    }

    public Application(int id, String status, LocalDateTime submittedDate, LocalDateTime reviewDate, LocalDateTime approvalDate, Customer applicant, Car car) {
        this.id = id;
        this.status = status;
        this.submittedDate = submittedDate;
        this.reviewDate = reviewDate;
        this.approvalDate = approvalDate;
        this.applicant = applicant;
        this.car = car;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getSubmittedDate() {
        return submittedDate;
    }

    public void setSubmittedDate(LocalDateTime submittedDate) {
        this.submittedDate = submittedDate;
    }

    public LocalDateTime getReviewDate() {
        return reviewDate;
    }

    public void setReviewDate(LocalDateTime reviewDate) {
        this.reviewDate = reviewDate;
    }

    public LocalDateTime getApprovalDate() {
        return approvalDate;
    }

    public void setApprovalDate(LocalDateTime approvalDate) {
        this.approvalDate = approvalDate;
    }

    public Customer getApplicant() {
        return applicant;
    }

    public void setApplicant(Customer applicant) {
        this.applicant = applicant;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }
}

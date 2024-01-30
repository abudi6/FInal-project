package com.project.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Date;

@Entity
@Table(name="car")
public class Car {
    @Id
    @GeneratedValue(generator = "custom-id", strategy = GenerationType.IDENTITY)
    @GenericGenerator(name = "custom-id", strategy = "com.project.backend.service.CarIdGenerator")
    private int id;
    private String name;
    private String displayImage;
    private String brand;
    @Temporal(TemporalType.DATE)
    private Date manuDate;
    private String age;
    private String color;
    private String size;
    private String status; // Default value
    @Type(type = "text")
    private String description;
    @Temporal(TemporalType.DATE)
    private Date registeredDate;

    @OneToOne(mappedBy = "car")
    @JsonIgnore
    private Application application;

    public Car() {
    }

    public Car(int id, String name, String displayImage, String brand, Date manuDate, String age, String color, String size, String status, String description, Date registeredDate, Application application) {
        this.id = id;
        this.name = name;
        this.displayImage = displayImage;
        this.brand = brand;
        this.manuDate = manuDate;
        this.age = age;
        this.color = color;
        this.size = size;
        this.status = status;
        this.description = description;
        this.registeredDate = registeredDate;
        this.application = application;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDisplayImage() {
        return displayImage;
    }

    public void setDisplayImage(String displayImage) {
        this.displayImage = displayImage;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Date getManuDate() {
        return manuDate;
    }

    public void setManuDate(Date manuDate) {
        this.manuDate = manuDate;
    }

    public String getAge() {
        return age;
    }

    public void setAge(Date manuDate) {
        if (manuDate != null) {
            this.manuDate = manuDate;

            int computedAge = calculateAge(this.manuDate);
            this.age = String.valueOf(computedAge);
        }
    }


    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Application getApplication() {
        return application;
    }

    public void setApplication(Application application) {
        this.application = application;
    }

    public Date getRegisteredDate() {
        return registeredDate;
    }

    public void setRegisteredDate(Date registeredDate) {
        this.registeredDate = registeredDate;
    }

    private int calculateAge(Date manuDate) {
        Calendar birthCalendar = Calendar.getInstance();
        birthCalendar.setTime(manuDate);

        Calendar currentCalendar = Calendar.getInstance();

        int years = currentCalendar.get(Calendar.YEAR) - birthCalendar.get(Calendar.YEAR);
        int months = currentCalendar.get(Calendar.MONTH) - birthCalendar.get(Calendar.MONTH);

        if (currentCalendar.get(Calendar.DAY_OF_MONTH) < birthCalendar.get(Calendar.DAY_OF_MONTH)) {
            months--;
        }

        if (months < 0) {
            months += 12;
            years--;
        }

        return years * 12 + months;
    }
}

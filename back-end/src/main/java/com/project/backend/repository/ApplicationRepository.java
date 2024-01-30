package com.project.backend.repository;

import com.project.backend.model.Application;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApplicationRepository extends CrudRepository<Application, Integer> {
    @Query("SELECT a FROM Application a WHERE CONCAT(a.applicant.fullName) LIKE %:applicant%")
    List<Application> findByApplicantName(@Param("applicant") String applicantName);
    @Query("SELECT a FROM Application a WHERE CONCAT(a.car.name) LIKE %:car%")
    List<Application> findByCarName(@Param("car") String carName);
    @Query("SELECT a FROM Application a WHERE a.applicant.id LIKE %:id%")
    List<Application> findByApplicantId(@Param("id") int id);
}

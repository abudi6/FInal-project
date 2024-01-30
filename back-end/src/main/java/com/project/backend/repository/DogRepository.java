package com.project.backend.repository;

import com.project.backend.model.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DogRepository extends CrudRepository<Car, Integer> {
    @Query("SELECT a FROM Dog a WHERE CONCAT(a.name) LIKE %:name%")
    List<Car> findByName(@Param("name") String name);

    List<Car> findByGender(@Param("gender") String gender);

    @Query("SELECT a FROM Dog a WHERE CONCAT(a.adoptionStatus) LIKE %:adoptionStatus%")
    List<Car> findByAdoptionStatus(@Param("adoptionStatus")String adoptionStatus);
}

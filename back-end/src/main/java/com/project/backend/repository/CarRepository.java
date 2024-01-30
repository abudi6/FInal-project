package com.project.backend.repository;

import com.project.backend.model.Car;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarRepository extends CrudRepository<Car, Integer> {
    @Query("SELECT a FROM Car a WHERE CONCAT(a.name) LIKE %:name%")
    List<Car> findByName(@Param("name") String name);

    List<Car> findByColor(@Param("color") String color);

    List<Car> findByBrand(@Param("brand") String brand);

    @Query("SELECT a FROM Car a WHERE CONCAT(a.status) LIKE %:status%")
    List<Car> findByStatus(@Param("status")String status);
}

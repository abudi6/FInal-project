package com.project.backend.repository;

import com.project.backend.model.Admin;
import com.project.backend.model.Customer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
    @Query("SELECT a FROM Customer a WHERE CONCAT(a.firstName, ' ', a.lastName) LIKE %:name%")
    List<Customer> findByName(@Param("name") String name);

    @Query("SELECT a FROM Customer a WHERE CONCAT(a.email) LIKE %:email%")
    List<Customer> findByEmail(@Param("email")String email);

    @Query("SELECT a FROM Customer a WHERE CONCAT(a.phoneNumber) LIKE %:phone%")
    List<Customer> findByPhoneNumber(@Param("phone")String phoneNumber);

    @Query("SELECT a FROM Customer a WHERE a.email = :email")
    Customer findUserByEmail(@Param("email") String email);

    @Query("SELECT a FROM Customer a WHERE a.password = :password")
    Customer findUserByPassword(@Param("password") String pass);
}

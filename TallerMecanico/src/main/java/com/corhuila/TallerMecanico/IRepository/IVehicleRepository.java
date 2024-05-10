package com.corhuila.TallerMecanico.IRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.corhuila.TallerMecanico.Entity.Vehicle;

@Repository
public interface IVehicleRepository extends JpaRepository<Vehicle, Long> {

    @Query("SELECT v FROM Vehicle v WHERE v.plate = :plate")
    Optional<Vehicle> findByPlate(String plate);

}

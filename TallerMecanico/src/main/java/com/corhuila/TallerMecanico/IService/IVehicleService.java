package com.corhuila.TallerMecanico.IService;

import java.util.List;
import java.util.Optional;

import com.corhuila.TallerMecanico.Entity.Vehicle;

public interface IVehicleService {
  List<Vehicle> findAllActive();

  Optional<Vehicle> findById(Long id);

  Optional<Vehicle> findByPlate(String plate);

  Vehicle save(Vehicle vehicle);

  void update(Vehicle vehicle, String plate);

  void delete(String plate);

}

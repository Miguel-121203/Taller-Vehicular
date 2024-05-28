package com.corhuila.TallerMecanico.Service;

import com.corhuila.TallerMecanico.Entity.Vehicle;
import com.corhuila.TallerMecanico.IRepository.IVehicleRepository;
import com.corhuila.TallerMecanico.IService.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import java.util.stream.Collectors;

@Service
public class VehicleService implements IVehicleService {
  @Autowired
  private IVehicleRepository repository;

  @Override
  public List<Vehicle> findAllActive() {

    List<Vehicle> allVehicles = repository.findAll();

    return allVehicles.stream().filter(Vehicle::isState).collect(Collectors.toList());
  }

  @Override
  public Optional<Vehicle> findById(Long id) {
    return repository.findById(id);
  }

  @Override
  public Vehicle save(Vehicle vehicle) {
    return repository.save(vehicle);
  }

  @Override
  public void update(Vehicle vehicle, String plate) {
    Optional<Vehicle> ps = repository.findByPlate(plate);

    if (!ps.isEmpty()) {
      Vehicle vehicleUpdate = ps.get();
      vehicleUpdate.setBrand(vehicle.getBrand());
      vehicleUpdate.setLine(vehicle.getLine());
      vehicleUpdate.setPlate(vehicle.getPlate());
      vehicleUpdate.setModel(vehicle.getModel());
      vehicleUpdate.setFuelLevel(vehicle.getFuelLevel());

      // REFERENCIAS
      vehicleUpdate.setOrderId(vehicle.getOrderId());
      vehicleUpdate.setInventoryId(vehicle.getInventoryId());
      vehicleUpdate.setServicioId(vehicle.getServicioId());
      vehicleUpdate.setPersonId(vehicle.getPersonId());

      repository.save(vehicleUpdate);
    } else
      System.out.println("El vehiculo no existe!!!");
  }

  @Override
  public void delete(String plate) {
    Optional<Vehicle> vehicleInActive = repository.findByPlate(plate);
    vehicleInActive.ifPresent(vehicle -> {
      vehicle.setState(false);
      repository.save(vehicle);
    });
  }

  @Override
  public void delete(Long id) {
    repository.deleteById(id);
  }

  @Override
  public Optional<Vehicle> findByPlate(String plate) {

    return repository.findByPlate(plate);
  }

}

package com.corhuila.TallerMecanico.Controller;

import com.corhuila.TallerMecanico.Entity.Vehicle;
import com.corhuila.TallerMecanico.IService.IVehicleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/vehicle")
public class VehicleController {

  @Autowired
  private IVehicleService service;

  @GetMapping()
  public List<Vehicle> findAll() {
    return service.findAllActive();
  }

  @GetMapping("/{id}")
  public Optional<Vehicle> findById(@PathVariable Long id) {
    return service.findById(id);
  }

  @GetMapping("placa/{plate}")
  public Optional<Vehicle> findByPlate(@PathVariable String plate) {

    return service.findByPlate(plate);
  }

  @PostMapping()
  public Vehicle save(@RequestBody Vehicle vehicle) {
    return service.save(vehicle);
  }

  @PutMapping("/{plate}")
  public void update(@RequestBody Vehicle vehicle, @PathVariable String plate) {
    service.update(vehicle, plate);
  }

  @DeleteMapping("estado/{plate}")
  public void delete(@PathVariable String plate) {
    service.delete(plate);
  }
}

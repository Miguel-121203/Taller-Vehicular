package com.corhuila.TallerMecanico.Controller;

import com.corhuila.TallerMecanico.Entity.Servicio;
import com.corhuila.TallerMecanico.IService.IServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/service")
public class ServicioController {

  @Autowired
  private IServicioService service;

  @GetMapping()
  public List<Servicio> findAll() {
    return service.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Servicio> findById(@PathVariable Long id) {
    return service.findById(id);
  }

  @PostMapping()
  public Servicio save(@RequestBody Servicio servicio) {
    return service.save(servicio);
  }

  @PutMapping("/{id}")
  public void update(@RequestBody Servicio servicio, @PathVariable Long id) {
    service.update(servicio, id);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable Long id) {
    service.delete(id);
  }
}

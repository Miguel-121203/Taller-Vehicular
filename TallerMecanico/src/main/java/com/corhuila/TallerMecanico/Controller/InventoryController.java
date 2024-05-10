package com.corhuila.TallerMecanico.Controller;

import com.corhuila.TallerMecanico.Entity.Inventory;
import com.corhuila.TallerMecanico.IService.IInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/inventory")
public class InventoryController {

  @Autowired
  private IInventoryService service;

  @GetMapping()
  public List<Inventory> findAll() {
    return service.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Inventory> findById(@PathVariable Long id) {
    return service.findById(id);
  }

  @PostMapping()
  public Inventory save(@RequestBody Inventory inventory) {
    return service.save(inventory);
  }

  @PutMapping("/{id}")
  public void update(@RequestBody Inventory inventory, @PathVariable Long id) {
    service.update(inventory, id);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable Long id) {
    service.delete(id);
  }
}

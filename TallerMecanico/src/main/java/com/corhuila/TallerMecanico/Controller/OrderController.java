package com.corhuila.TallerMecanico.Controller;

import com.corhuila.TallerMecanico.Entity.Order;
import com.corhuila.TallerMecanico.IService.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/order")
public class OrderController {

  @Autowired
  private IOrderService service;

  @GetMapping()
  public List<Order> findAll() {
    return service.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Order> findById(@PathVariable Long id) {
    return service.findById(id);
  }

  @PostMapping()
  public Order save(@RequestBody Order order) {
    return service.save(order);
  }

  @PutMapping("/{id}")
  public void update(@RequestBody Order order, @PathVariable Long id) {
    service.update(order, id);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable Long id) {
    service.delete(id);
  }
}

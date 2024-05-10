package com.corhuila.TallerMecanico.Controller;

import com.corhuila.TallerMecanico.Entity.Person;
import com.corhuila.TallerMecanico.IService.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("api/person")
public class PersonController {

  @Autowired
  private IPersonService service;

  @GetMapping()
  public List<Person> findAll() {
    return service.findAll();
  }

  @GetMapping("/{id}")
  public Optional<Person> findById(@PathVariable Long id) {
    return service.findById(id);
  }

  @PostMapping()
  public Person save(@RequestBody Person person) {
    return service.save(person);
  }

  @PutMapping("/{id}")
  public void update(@RequestBody Person person, @PathVariable Long id) {
    service.update(person, id);
  }

  @DeleteMapping("{id}")
  public void delete(@PathVariable Long id) {
    service.delete(id);
  }
}

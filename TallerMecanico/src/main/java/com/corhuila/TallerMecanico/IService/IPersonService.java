package com.corhuila.TallerMecanico.IService;

import java.util.List;
import java.util.Optional;

import com.corhuila.TallerMecanico.Entity.Person;

public interface IPersonService {
  List<Person> findAll();

  Optional<Person> findById(Long id);

  Person save(Person person);

  void update(Person person, Long id);

  void delete(Long id);
}

package com.corhuila.TallerMecanico.Service;

import com.corhuila.TallerMecanico.Entity.Person;
import com.corhuila.TallerMecanico.IRepository.IPersonRepository;
import com.corhuila.TallerMecanico.IService.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PersonService implements IPersonService {

  @Autowired
  private IPersonRepository repository;

  @Override
  public List<Person> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Person> findById(Long id) {
    return repository.findById(id);
  }

  @Override
  public Person save(Person person) {
    return repository.save(person);
  }

  @Override
  public void update(Person person, Long id) {
    Optional<Person> ps = repository.findById(id);

    if (!ps.isEmpty()) {
      Person personUpdate = ps.get();
      personUpdate.setFirstName(person.getFirstName());
      personUpdate.setSecondName(person.getSecondName());
      personUpdate.setFirstLastName(person.getFirstLastName());
      personUpdate.setSecondLastName(person.getSecondLastName());
      personUpdate.setNumberId(person.getNumberId());
      personUpdate.setAddress(person.getAddress());
      personUpdate.setEmail(person.getEmail());

      // personUpdate.setVehicleId(person.getVehicleId());

      repository.save(personUpdate);
    } else
      System.out.println("La persona no existe !!!!!!!");
  }

  @Override
  public void delete(Long id) {
    repository.deleteById(id);
  }
}

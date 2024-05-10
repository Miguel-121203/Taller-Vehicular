package com.corhuila.TallerMecanico.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corhuila.TallerMecanico.Entity.Person;

@Repository
public interface IPersonRepository extends JpaRepository<Person, Long> {

}

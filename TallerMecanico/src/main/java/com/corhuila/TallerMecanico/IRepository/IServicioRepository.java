package com.corhuila.TallerMecanico.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corhuila.TallerMecanico.Entity.Servicio;

@Repository
public interface IServicioRepository extends JpaRepository<Servicio, Long> {

}

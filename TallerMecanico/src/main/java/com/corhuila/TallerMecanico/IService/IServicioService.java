package com.corhuila.TallerMecanico.IService;

import java.util.List;
import java.util.Optional;

import com.corhuila.TallerMecanico.Entity.Servicio;

public interface IServicioService {
  List<Servicio> findAll();

  Optional<Servicio> findById(Long id);

  Servicio save(Servicio servicio);

  void update(Servicio servicio, Long id);

  void delete(Long id);
}

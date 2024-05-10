package com.corhuila.TallerMecanico.Service;

import com.corhuila.TallerMecanico.Entity.Servicio;
import com.corhuila.TallerMecanico.IRepository.IServicioRepository;
import com.corhuila.TallerMecanico.IService.IServicioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServicioService implements IServicioService {
  @Autowired
  private IServicioRepository repository;

  @Override
  public List<Servicio> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Servicio> findById(Long id) {
    return repository.findById(id);
  }

  @Override
  public Servicio save(Servicio servicio) {
    return repository.save(servicio);
  }

  @Override
  public void update(Servicio servicio, Long id) {
    Optional<Servicio> ps = repository.findById(id);

    if (!ps.isEmpty()) {
      Servicio servicioUpdate = ps.get();
      servicioUpdate.setDescription(servicio.getDescription());
      servicioUpdate.setQuantity(servicio.getQuantity());
      servicioUpdate.setSubTotal(servicio.getSubTotal());
      servicioUpdate.setTotal(servicio.getTotal());

      repository.save(servicioUpdate);
    } else
      System.out.println("El servicio no se encuentra!!!");
  }

  @Override
  public void delete(Long id) {
    repository.deleteById(id);
  }
}

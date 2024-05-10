package com.corhuila.TallerMecanico.IService;

import java.util.List;
import java.util.Optional;

import com.corhuila.TallerMecanico.Entity.Inventory;

public interface IInventoryService {
  List<Inventory> findAll();

  Optional<Inventory> findById(Long id);

  Inventory save(Inventory inventory);

  void update(Inventory inventory, Long id);

  void delete(Long id);
}

package com.corhuila.TallerMecanico.Service;

import com.corhuila.TallerMecanico.Entity.Inventory;
import com.corhuila.TallerMecanico.IRepository.IInventoryRepository;
import com.corhuila.TallerMecanico.IService.IInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryService implements IInventoryService {

  @Autowired
  private IInventoryRepository repository;

  @Override
  public List<Inventory> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Inventory> findById(Long id) {
    return repository.findById(id);
  }

  @Override
  public Inventory save(Inventory inventory) {
    return repository.save(inventory);
  }

  @Override
  public void update(Inventory inventory, Long id) {

    Optional<Inventory> ps = repository.findById(id);

    if (!ps.isEmpty()) {
      Inventory inventoryUpdate = ps.get();

      inventoryUpdate.setDescription(inventory.getDescription());
      inventoryUpdate.setOption(inventory.getOption());
      repository.save(inventoryUpdate);
    } else
      System.out.println("No existe el inventario!!!!!");
  }

  @Override
  public void delete(Long id) {
    repository.deleteById(id);
  }
}

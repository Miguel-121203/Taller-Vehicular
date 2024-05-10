package com.corhuila.TallerMecanico.Service;

import com.corhuila.TallerMecanico.Entity.Order;
import com.corhuila.TallerMecanico.IRepository.IOrderRepository;
import com.corhuila.TallerMecanico.IService.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService implements IOrderService {
  @Autowired
  private IOrderRepository repository;

  @Override
  public List<Order> findAll() {
    return repository.findAll();
  }

  @Override
  public Optional<Order> findById(Long id) {
    return repository.findById(id);
  }

  @Override
  public Order save(Order order) {
    return repository.save(order);
  }

  @Override
  public void update(Order order, Long id) {
    Optional<Order> ps = repository.findById(id);

    if (!ps.isEmpty()) {
      Order orderUpdate = ps.get();
      orderUpdate.setServiceNumber(order.getServiceNumber());
      // orderUpdate.setTimeEntry(order.getTimeEntry());
      orderUpdate.setDateEntry(order.getDateEntry());
      // orderUpdate.setTimeExit(order.getTimeExit());
      orderUpdate.setDateExit(order.getDateExit());
      orderUpdate.setOrderWork(order.getOrderWork());
      orderUpdate.setPrice(order.getPrice());
      repository.save(orderUpdate);
    } else {
      System.out.println("No existe la orden!!!");
    }
  }

  @Override
  public void delete(Long id) {
    repository.deleteById(id);
  }
}

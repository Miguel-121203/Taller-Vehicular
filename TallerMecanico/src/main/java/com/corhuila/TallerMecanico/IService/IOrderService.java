package com.corhuila.TallerMecanico.IService;

import java.util.List;
import java.util.Optional;

import com.corhuila.TallerMecanico.Entity.Order;

public interface IOrderService {
  List<Order> findAll();

  Optional<Order> findById(Long id);

  Order save(Order order);

  void update(Order order, Long id);

  void delete(Long id);

}

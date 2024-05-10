package com.corhuila.TallerMecanico.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corhuila.TallerMecanico.Entity.Order;

@Repository
public interface IOrderRepository extends JpaRepository<Order, Long> {

}
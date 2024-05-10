package com.corhuila.TallerMecanico.IRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.corhuila.TallerMecanico.Entity.Inventory;

@Repository
public interface IInventoryRepository extends JpaRepository<Inventory, Long> {

}

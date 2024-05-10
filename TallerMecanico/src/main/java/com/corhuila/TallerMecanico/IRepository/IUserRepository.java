package com.corhuila.TallerMecanico.IRepository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.corhuila.TallerMecanico.Entity.User;

public interface IUserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

}

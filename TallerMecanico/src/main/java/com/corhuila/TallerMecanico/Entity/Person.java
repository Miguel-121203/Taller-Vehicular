package com.corhuila.TallerMecanico.Entity;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "persona")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Person {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "primer_nombre", nullable = false, length = 50)
  private String firstName;

  @Column(name = "segundo_nombre", length = 60)
  private String secondName;

  @Column(name = "primer_apellido", nullable = false, length = 60)
  private String firstLastName;

  @Column(name = "segundo_apellido", length = 70)
  private String secondLastName;

  @Column(name = "numero_identificacion", nullable = false)
  private int numberId;

  @Column(name = "telefono", nullable = false)
  private Long numberCell;

  @Column(name = "direccion")
  private String address;

  @Column(name = "correo_electronico")
  private String email;

}

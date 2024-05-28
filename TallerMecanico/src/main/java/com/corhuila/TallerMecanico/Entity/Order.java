package com.corhuila.TallerMecanico.Entity;

import java.time.LocalDate;

import lombok.*;

import jakarta.persistence.*;

@Entity
@Table(name = "orden")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Order {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "numero_servicio", nullable = false)
  private Long serviceNumber;

  // @Column(name = "hora_ingreso", nullable = false)
  // private LocalTime timeEntry;

  @Column(name = "fecha_ingreso", nullable = false)
  private LocalDate dateEntry;

  // @Column(name = "hora_salida")
  // private LocalTime timeExit;

  @Column(name = "fecha_salida")
  private LocalDate dateExit;

  @Column(name = "orden_trabajo")
  private int orderWork;

  @Column(name = "cotizacion")
  private double price;

  @Column(name = "estado")
  private boolean state = true;

}

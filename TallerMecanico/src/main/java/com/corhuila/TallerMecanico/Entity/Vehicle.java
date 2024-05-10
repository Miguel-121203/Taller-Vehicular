package com.corhuila.TallerMecanico.Entity;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "vehiculo")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Vehicle {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "marca", length = 50)
  private String brand;

  @Column(name = "linea_vehiculo", nullable = false)
  private String line;

  @Column(name = "numero_placa", length = 6, nullable = false, unique = true)
  private String plate;

  @Column(name = "kilometros_totales", nullable = false)
  private double kilometers;

  @Column(name = "modelo", length = 4)
  private int model;

  @Column(name = "nivel_combustible")
  private int fuelLevel;

  @Column(name = "estado")
  private boolean state = true;

  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "order_id", nullable = false)
  private Order orderId;

  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "inventory_id", nullable = false)
  private Inventory inventoryId;

  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "servicio_id", nullable = false)
  private Servicio servicioId;

  @ManyToOne(fetch = FetchType.EAGER, optional = false)
  @JoinColumn(name = "persona_id", nullable = false)
  private Person personId;
}

package com.corhuila.TallerMecanico.Entity;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Table(name = "servicio")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Servicio {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "descripcion_servicio_realizar")
  private String description;

  @Column(name = "cantidad")
  private int quantity;

  @Column(name = "sub_total")
  private double subTotal;

  @Column(name = "total")
  private double total;

  @Column(name = "observaciones")
  private String observations;

  @Column(name = "tecnico_responsable")
  private String responsibleTechnician;

}

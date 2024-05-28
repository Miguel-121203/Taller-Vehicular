import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interface/interfaces';
import { ServicioService } from '../../../shared/services/servicio.service';

@Component({
  selector: 'app-create-servicios',
  templateUrl: './create-servicios.page.html',
  styleUrls: ['./create-servicios.page.scss'],
})
export class CreateServiciosPage implements OnInit {
  servicios:Service={
    id: 0,
    description: '',
    quantity: 0,
    subTotal: 0,
    total: 0,
    observations: '',
    responsibleTechnician: '',
    state: true
  }

  constructor(private ServicioService:ServicioService) { }

  ngOnInit() {
  }


crearServi(){

  this.ServicioService.crearServi(this.servicios).subscribe(
    (response) => {
      console.log('Servicio creado exitosamente', response);
      // Aquí puedes añadir lógica adicional como redireccionar al usuario o mostrar un mensaje de éxito
    },
    (error) => {
      console.error('Error al crear el servicio', error);
      // Manejo de errores
    }


  );
}




}

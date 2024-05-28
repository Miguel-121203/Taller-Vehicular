import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/interface/interfaces';
import { InventarioService } from '../../../shared/services/inventario.service';

@Component({
  selector: 'app-create-inventario',
  templateUrl: './create-inventario.page.html',
  styleUrls: ['./create-inventario.page.scss'],
})
export class CreateInventarioPage implements OnInit {

   inventario:Inventory={
    id: 0,
    description: '',
    option: '',
    state:true,

   }


  constructor(private InventarioService:InventarioService) { }

  ngOnInit() {
  }


  crearInven(){
   console.log(this.inventario)
   this.InventarioService.crearInven(this.inventario).subscribe(
    (response) => {
      console.log('Inventario creado exitosamente', response);
      // Aquí puedes añadir lógica adicional como redireccionar al usuario o mostrar un mensaje de éxito
    },
    (error) => {
      console.error('Error al crear el Inventario', error);
      // Manejo de errores
    }


   )

  }
}

import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../../shared/services/orden.service';
import { Order } from 'src/app/interface/interfaces';

@Component({
  selector: 'app-create-orden',
  templateUrl: './create-orden.page.html',
  styleUrls: ['./create-orden.page.scss'],
})
export class CreateOrdenPage implements OnInit {

  orden:Order={
    id: 0,
    serviceNumber: 0,
    dateEntry: '',
    dateExit: '',
    orderWork: 0,
    price: 0,
    state: true,

  }

  constructor(private OrdenService:OrdenService) { }

  ngOnInit() {
  }

  crearOrden(){
    console.log(this.orden);
    this.OrdenService.crearOrden(this.orden).subscribe(
     (response)=>{
       console.log('Orden cread correctamente',response);
     },
     (error)=>{
     console.error('Error al crear orden');
     }
    )


   }


}

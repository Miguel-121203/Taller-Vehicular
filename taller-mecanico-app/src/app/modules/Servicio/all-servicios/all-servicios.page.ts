import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interface/interfaces';
import { ServicioService } from '../../../shared/services/servicio.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-servicios',
  templateUrl: './all-servicios.page.html',
  styleUrls: ['./all-servicios.page.scss'],
})
export class AllServiciosPage implements OnInit {

id="";
servicios:Service[]=[];


  constructor(private ServicioService:ServicioService,private navCtrl:NavController) { }

  ngOnInit() {

    this.ServicioService.getService().subscribe(data=>{
      console.log(data)
      this.servicios=data
    })


  }
  deleteService(id:number){
    this.ServicioService.deleteService(id).subscribe(
      data=>{
        this.ngOnInit();
      }
    );
}


editarserv(id:number){
  // Navegar a la página de edición de inventario con el ID del inventario
  this.navCtrl.navigateForward(`/update-servicios/${id}`)
}
}

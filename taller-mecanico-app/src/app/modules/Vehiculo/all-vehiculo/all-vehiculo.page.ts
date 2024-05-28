import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../../shared/services/vehiculo.service';
import { vehiculo } from 'src/app/interface/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-vehiculo',
  templateUrl: './all-vehiculo.page.html',
  styleUrls: ['./all-vehiculo.page.scss'],
})
export class AllVehiculoPage implements OnInit {
id='';
vehiculos:vehiculo[]=[];

  constructor( private VehiculoService:VehiculoService,private navCtrl:NavController) { }

  ngOnInit() {

    this.VehiculoService.getVehiculo().subscribe(data=>{
      console.log(data)
      this.vehiculos = data
    });
  }


  deleteVehi(id:number){
    this.VehiculoService.deleteVehi(id).subscribe(
      data=>{
        this.ngOnInit();
      }
    );
  }

  editarVehi(id:number){
    // Navegar a la página de edición de inventario con el ID del inventario
    this.navCtrl.navigateForward(`/update-vehiculo/${id}`)
  }


}

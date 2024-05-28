import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { vehiculo } from 'src/app/interface/interfaces';
import { VehiculoService } from '../../../shared/services/vehiculo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-vehiculo',
  templateUrl: './update-vehiculo.page.html',
  styleUrls: ['./update-vehiculo.page.scss'],
})
export class UpdateVehiculoPage implements OnInit {
  id!: number;
  vehiculo!: vehiculo;


  constructor(private route: ActivatedRoute, private VehiculoService:VehiculoService,private navCtrl:NavController,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];  // El '+' convierte el string a número
      this.VehiculoService.getVehiculoById(this.id).subscribe(vehiculo => {
        this.vehiculo = vehiculo;
      });
    });
  }


  guardar() {
    // Lógica para guardar los cambios del usuario
    this.VehiculoService.updateVehi(this.vehiculo).subscribe(
      response=>
      this.navCtrl.navigateForward(`/all-vehiculo`)

    )
  }
}

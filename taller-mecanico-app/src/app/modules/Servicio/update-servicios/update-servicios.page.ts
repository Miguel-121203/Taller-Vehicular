import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/interface/interfaces';
import { ServicioService } from '../../../shared/services/servicio.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-servicios',
  templateUrl: './update-servicios.page.html',
  styleUrls: ['./update-servicios.page.scss'],
})
export class UpdateServiciosPage implements OnInit {
  id!: number;
  servicios!:Service;
  
  constructor(private route: ActivatedRoute, private ServicioService:ServicioService,private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];  // El '+' convierte el string a número
      this.ServicioService.getServicioById(this.id).subscribe(servicios => {
        this.servicios = servicios;
      });
    });
  }

  guardar() {
    // Lógica para guardar los cambios del usuario
    this.ServicioService.updateServ(this.servicios).subscribe(
      response=>
      this.navCtrl.navigateForward(`/all-servicios`)

    )
  }


}

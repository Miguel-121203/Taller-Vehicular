import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/interface/interfaces';
import { OrdenService } from '../../../shared/services/orden.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-orden',
  templateUrl: './update-orden.page.html',
  styleUrls: ['./update-orden.page.scss'],
})
export class UpdateOrdenPage implements OnInit {
  id!: number;
  Orden!: Order;



  constructor(private route: ActivatedRoute, private OrdenService:OrdenService,private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];  // El '+' convierte el string a número
      this.OrdenService.getOrderById(this.id).subscribe(Orden => {
        this.Orden = Orden;
      });
    });

  }


  guardar() {
    // Lógica para guardar los cambios del usuario
    this.OrdenService.updateOrder(this.Orden).subscribe(
      response=>
      this.navCtrl.navigateForward(`/all-orden`)

    )
  }



}

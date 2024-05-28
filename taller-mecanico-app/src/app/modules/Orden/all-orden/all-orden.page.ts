import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/interface/interfaces';
import { OrdenService } from '../../../shared/services/orden.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-orden',
  templateUrl: './all-orden.page.html',
  styleUrls: ['./all-orden.page.scss'],
})
export class AllOrdenPage implements OnInit {

  id="";
  orden:Order[]=[];

  constructor(private OrdenService:OrdenService,private navCtrl:NavController) { }

  ngOnInit() {
    this.OrdenService.getOrder().subscribe(data=>{
    console.log(data)
    this.orden= data
    }
    )
  }

  deleteOrde(id:number){
    this.OrdenService.deleteOrden(id).subscribe(
      data=>{
        this.ngOnInit();
      }
    )
}


editarOrde(id:number){
  // Navegar a la página de edición de inventario con el ID del inventario
  this.navCtrl.navigateForward(`/update-orden/${id}`)
}


}

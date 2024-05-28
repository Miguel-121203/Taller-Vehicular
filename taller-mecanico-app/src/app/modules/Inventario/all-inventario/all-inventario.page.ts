import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../../../shared/services/inventario.service';
import { Inventory } from 'src/app/interface/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-inventario',
  templateUrl: './all-inventario.page.html',
  styleUrls: ['./all-inventario.page.scss'],
})
export class AllInventarioPage implements OnInit {
  id="";
inventarios:Inventory[]=[];

  constructor(private InventarioService:InventarioService,private navCtrl:NavController) { }

  ngOnInit() {
    this.InventarioService.getInventry().subscribe(data=>{
      this.inventarios=data
    })
  }

deleteInven(id:number){
  this.InventarioService.deleteInven(id).subscribe(
    data=>{
      this.ngOnInit();
    }
  );
}

editarUsu(id:number){
  // Navegar a la página de edición de inventario con el ID del inventario
  this.navCtrl.navigateForward(`/update-inventario/${id}`)
}


}

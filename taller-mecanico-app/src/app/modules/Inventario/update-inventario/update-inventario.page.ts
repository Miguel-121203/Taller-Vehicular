import { Component, OnInit } from '@angular/core';
import { Inventory } from 'src/app/interface/interfaces';
import { InventarioService } from '../../../shared/services/inventario.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-inventario',
  templateUrl: './update-inventario.page.html',
  styleUrls: ['./update-inventario.page.scss'],
})
export class UpdateInventarioPage implements OnInit {
  id!: number;
  inventario!: Inventory;
  constructor(private route: ActivatedRoute, private InventarioService:InventarioService,private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];  // El '+' convierte el string a número
      this.InventarioService.getInvenById(this.id).subscribe(inventario => {
        this.inventario = inventario;
      });
    });
  }
  guardar() {
    // Lógica para guardar los cambios del usuario
    this.InventarioService.updateInven(this.inventario).subscribe(
      response=>
      this.navCtrl.navigateForward(`/all-inventario`)

    )
  }
}

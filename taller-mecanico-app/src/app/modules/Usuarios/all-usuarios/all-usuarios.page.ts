import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams } from '@ionic/angular';
import { Usuario } from 'src/app/interface/interfaces';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { UpdateUsuariosPage } from '../update-usuarios/update-usuarios.page';

@Component({
  selector: 'app-all-usuarios',
  templateUrl: './all-usuarios.page.html',
  styleUrls: ['./all-usuarios.page.scss'],
})
export class AllUsuariosPage implements OnInit {

  id="";
  usuarios:Usuario[]=[];

  constructor(private UsuarioService:UsuarioService,private router: Router,private navCtrl:NavController) { }

  ngOnInit() {
    this.UsuarioService.getUsu().subscribe(data=>{
      console.log(data)
      this.usuarios = data
    }
    )
  }


  deleteUsu(id:number){
    this.UsuarioService.deleteUsu(id).subscribe(
      data=>{
        this.ngOnInit();
      }
    )
}

editarUsu(id:number){
  // Navegar a la página de edición de inventario con el ID del inventario
  this.navCtrl.navigateForward(`/update-usuarios/${id}`)
}





}

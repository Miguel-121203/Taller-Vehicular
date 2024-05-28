import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../shared/services/usuario.service';
import { Usuario } from '../../../interface/interfaces';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-update-usuarios',
  templateUrl: './update-usuarios.page.html',
  styleUrls: ['./update-usuarios.page.scss'],
})
export class UpdateUsuariosPage implements OnInit {
  id!: number;
  usuario!: Usuario;

constructor(private route: ActivatedRoute, private usuarioService: UsuarioService,private navCtrl:NavController) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];  // El '+' convierte el string a número
      this.usuarioService.getUsuarioById(this.id).subscribe(usuario => {
        this.usuario = usuario;
      });
    });
  }

  guardar() {
    // Lógica para guardar los cambios del usuario
    this.usuarioService.updateUsu(this.usuario).subscribe(
      response=>
      this.navCtrl.navigateForward(`/all-usuarios`)

    )
  }

}

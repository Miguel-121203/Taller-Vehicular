import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/interfaces';
import { UsuarioService } from '../../../shared/services/usuario.service';

@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.page.html',
  styleUrls: ['./create-usuario.page.scss'],
})
export class CreateUsuarioPage implements OnInit {


  usuario:Usuario= {
    id:0,
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
    numberId: 0,
    numberCell: 0,
    address: '',
    email: '',
    state: true,
  }

  constructor( private UsuarioService:UsuarioService) { }

  ngOnInit() {
  }

  crearUsu() {
    console.log(this.usuario);
    this.UsuarioService.crearUsu(this.usuario).subscribe(
      (response) => {
        console.log('Usuario creado exitosamente', response);
        // Aquí puedes añadir lógica adicional como redireccionar al usuario o mostrar un mensaje de éxito
      },
      (error) => {
        console.error('Error al crear el usuario', error);
        // Manejo de errores
      }
    );
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interface/interfaces';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id!: number;
  usuarioForm!: FormGroup;

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.usuarioForm = this.fb.group({
      id: [0, Validators.required],
      firstName: ['', Validators.required],
      secondName: [''],
      firstLastName: ['', Validators.required],
      secondLastName: ['', Validators.required]
    });

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.usuarioService.getUsuarioById(this.id).subscribe(usuario => {
        this.usuarioForm.patchValue(usuario);

      });
    });
  }


}

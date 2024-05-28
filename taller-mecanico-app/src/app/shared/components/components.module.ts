import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DetalleComponent } from './detalle/detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({

  declarations: [HeaderComponent,DetalleComponent],
  exports:[HeaderComponent,DetalleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

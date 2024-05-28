import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateServiciosPageRoutingModule } from './update-servicios-routing.module';

import { UpdateServiciosPage } from './update-servicios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateServiciosPageRoutingModule
  ],
  declarations: [UpdateServiciosPage]
})
export class UpdateServiciosPageModule {}

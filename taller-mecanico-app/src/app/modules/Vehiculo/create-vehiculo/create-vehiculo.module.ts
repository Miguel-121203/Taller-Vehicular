import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateVehiculoPageRoutingModule } from './create-vehiculo-routing.module';

import { CreateVehiculoPage } from './create-vehiculo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateVehiculoPageRoutingModule
  ],
  declarations: [CreateVehiculoPage]
})
export class CreateVehiculoPageModule {}

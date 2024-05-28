import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllVehiculoPageRoutingModule } from './all-vehiculo-routing.module';

import { AllVehiculoPage } from './all-vehiculo.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllVehiculoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllVehiculoPage]
})
export class AllVehiculoPageModule {}

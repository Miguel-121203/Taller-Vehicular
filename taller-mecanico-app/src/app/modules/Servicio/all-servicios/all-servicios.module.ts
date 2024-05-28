import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllServiciosPageRoutingModule } from './all-servicios-routing.module';

import { AllServiciosPage } from './all-servicios.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllServiciosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllServiciosPage]
})
export class AllServiciosPageModule {}

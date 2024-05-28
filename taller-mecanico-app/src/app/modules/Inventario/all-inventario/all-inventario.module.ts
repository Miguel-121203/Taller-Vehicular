import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllInventarioPageRoutingModule } from './all-inventario-routing.module';

import { AllInventarioPage } from './all-inventario.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllInventarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllInventarioPage]
})
export class AllInventarioPageModule {}

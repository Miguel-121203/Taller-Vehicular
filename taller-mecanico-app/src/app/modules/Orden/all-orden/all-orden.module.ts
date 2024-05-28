import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllOrdenPageRoutingModule } from './all-orden-routing.module';

import { AllOrdenPage } from './all-orden.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllOrdenPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllOrdenPage]
})
export class AllOrdenPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateOrdenPageRoutingModule } from './update-orden-routing.module';

import { UpdateOrdenPage } from './update-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateOrdenPageRoutingModule
  ],
  declarations: [UpdateOrdenPage]
})
export class UpdateOrdenPageModule {}

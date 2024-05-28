import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateOrdenPageRoutingModule } from './create-orden-routing.module';

import { CreateOrdenPage } from './create-orden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateOrdenPageRoutingModule
  ],
  declarations: [CreateOrdenPage]
})
export class CreateOrdenPageModule {}

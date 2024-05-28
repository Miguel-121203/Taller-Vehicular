import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllUsuariosPageRoutingModule } from './all-usuarios-routing.module';

import { AllUsuariosPage } from './all-usuarios.page';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllUsuariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AllUsuariosPage]
})
export class AllUsuariosPageModule {}

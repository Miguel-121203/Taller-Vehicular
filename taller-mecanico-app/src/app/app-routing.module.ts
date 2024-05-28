import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './shared/components/detalle/detalle.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create-usuario',
    loadChildren: () => import('./modules/Usuarios/create-usuario/create-usuario.module').then( m => m.CreateUsuarioPageModule)
  },
  {
    path: 'all-usuarios',
    loadChildren: () => import('./modules/Usuarios/all-usuarios/all-usuarios.module').then( m => m.AllUsuariosPageModule)
  },
  {
    path: 'update-usuarios/:id',
    loadChildren: () => import('./modules/Usuarios/update-usuarios/update-usuarios.module').then( m => m.UpdateUsuariosPageModule)
  },
  {
    path: 'create-vehiculo',
    loadChildren: () => import('./modules/Vehiculo/create-vehiculo/create-vehiculo.module').then( m => m.CreateVehiculoPageModule)
  },
  {
    path: 'all-vehiculo',
    loadChildren: () => import('./modules/Vehiculo/all-vehiculo/all-vehiculo.module').then( m => m.AllVehiculoPageModule)
  },
  {
    path: 'update-vehiculo/:id',
    loadChildren: () => import('./modules/Vehiculo/update-vehiculo/update-vehiculo.module').then( m => m.UpdateVehiculoPageModule)
  },
  {
    path: 'create-orden',
    loadChildren: () => import('./modules/Orden/create-orden/create-orden.module').then( m => m.CreateOrdenPageModule)
  },
  {
    path: 'all-orden',
    loadChildren: () => import('./modules/Orden/all-orden/all-orden.module').then( m => m.AllOrdenPageModule)
  },
  {
    path: 'update-orden/:id',
    loadChildren: () => import('./modules/Orden/update-orden/update-orden.module').then( m => m.UpdateOrdenPageModule)
  },
   {path:'detalle/:id',component:DetalleComponent},
  {
    path: 'all-servicios',
    loadChildren: () => import('./modules/Servicio/all-servicios/all-servicios.module').then( m => m.AllServiciosPageModule)
  },
  {
    path: 'create-servicios',
    loadChildren: () => import('./modules/Servicio/create-servicios/create-servicios.module').then( m => m.CreateServiciosPageModule)
  },
  {
    path: 'update-servicios/:id',
    loadChildren: () => import('./modules/Servicio/update-servicios/update-servicios.module').then( m => m.UpdateServiciosPageModule)
  },
  {
    path: 'all-inventario',
    loadChildren: () => import('./modules/Inventario/all-inventario/all-inventario.module').then( m => m.AllInventarioPageModule)
  },
  {
    path: 'create-inventario',
    loadChildren: () => import('./modules/Inventario/create-inventario/create-inventario.module').then( m => m.CreateInventarioPageModule)
  },
  {
    path: 'update-inventario/:id',
    loadChildren: () => import('./modules/Inventario/update-inventario/update-inventario.module').then( m => m.UpdateInventarioPageModule)
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

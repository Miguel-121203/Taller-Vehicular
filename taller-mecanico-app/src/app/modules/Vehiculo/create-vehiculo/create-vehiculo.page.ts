import { Component, OnInit } from '@angular/core';
import { Inventory, Order, Service, Usuario, vehiculo } from 'src/app/interface/interfaces';
import { InventarioService } from 'src/app/shared/services/inventario.service';
import { OrdenService } from 'src/app/shared/services/orden.service';
import { ServicioService } from 'src/app/shared/services/servicio.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { VehiculoService } from 'src/app/shared/services/vehiculo.service';

@Component({
  selector: 'app-create-vehiculo',
  templateUrl: './create-vehiculo.page.html',
  styleUrls: ['./create-vehiculo.page.scss'],
})
export class CreateVehiculoPage implements OnInit {


  vehiculo:vehiculo = {
    id:0,
    brand: '',
    line: '',
    plate: '',
    model: '',
    fuelLevel: 0,
    state: true,
    orderId: {} as Order,
    inventoryId: {} as Inventory,
    servicioId: {} as Service,
    personId: {} as Usuario
  };
  usuarios: Usuario[] = [];
  ordenes: Order[] = [];
  inventarios: Inventory[] = [];
  servicios: Service[] = [];

  constructor(private UsuarioService:UsuarioService,
    private ServicioService:ServicioService,
    private OrdenService:OrdenService,
    private InventarioService:InventarioService,
    private VehiculoService:VehiculoService) { }

  ngOnInit() {

    this.UsuarioService.getUsu().subscribe(data => this.usuarios = data);
    this.ServicioService.getService().subscribe(data => this.servicios = data);
    this.OrdenService.getOrder().subscribe(data => this.ordenes = data);
    this.InventarioService.getInventry().subscribe(data => this.inventarios = data);
  }


  createVehicule(){
    this.VehiculoService.createVehiculo(this.vehiculo as vehiculo).subscribe(
      response =>{
      console.log('vehiculo creado',response)
      },
      error =>{
        console.error('error ',error)
      }
    )
  }

}

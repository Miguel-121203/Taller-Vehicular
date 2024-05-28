
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { vehiculo } from 'src/app/interface/interfaces';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  URL = environment.api + '/api/vehicle';

constructor(private Http:HttpClient) { }

getVehiculo():Observable<vehiculo[]>{
  return this.Http.get<vehiculo[]>(this.URL)
}

createVehiculo(vehiculo: vehiculo): Observable<vehiculo> {
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.Http.post<vehiculo>(this.URL,vehiculo,{headers});
}

updateVehi(vehiculo:vehiculo): Observable<vehiculo> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.Http.put<vehiculo>(`${this.URL}/${vehiculo.id}`, vehiculo, { headers });
}

deleteVehi(id:number):Observable<void>{
  return this.Http.delete<void>(`${this.URL}/${id}`);
}

getVehiculoById(id: number): Observable<vehiculo> {
  return this.Http.get<vehiculo>(`${this.URL}/${id}`);
}
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/interface/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  URL = environment.api + '/api/service';

  constructor(private http:HttpClient) { }


getService():Observable<Service[]>{
return this.http.get<Service[]>(this.URL)
}

crearServi(Service:Service):Observable<Service>{
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Service>(this.URL,Service,{headers})
}


deleteService(id:number):Observable<void>{
  return this.http.delete<void>(`${this.URL}/${id}`);
}

updateServ(Service:Service): Observable<Service> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<Service>(`${this.URL}/${Service.id}`, Service, { headers });
}

getServicioById(id: number): Observable<Service> {
  return this.http.get<Service>(`${this.URL}/${id}`);
}
}

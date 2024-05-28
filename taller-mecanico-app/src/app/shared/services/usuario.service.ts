import { Usuario } from './../../interface/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL = environment.api + '/api/person';

constructor(private http:HttpClient) { }


getUsu():Observable<Usuario[]>{
return this.http.get<Usuario[]>(this.URL);
}

crearUsu(Usuario:Usuario):Observable<Usuario>{
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post<Usuario>(this.URL,Usuario,{headers})
}

deleteUsu(id:number):Observable<void>{
  return this.http.delete<void>(`${this.URL}/${id}`);
}

updateUsu(Usuario:Usuario): Observable<Usuario> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<Usuario>(`${this.URL}/${Usuario.id}`, Usuario, { headers });
}

getUsuarioById(id: number): Observable<Usuario> {
  return this.http.get<Usuario>(`${this.URL}/${id}`);
}
}

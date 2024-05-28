import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from 'src/app/interface/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  URL = environment.api + '/api/inventory';

constructor(private http:HttpClient) { }

getInventry():Observable<Inventory[]>{
const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.get<Inventory[]>(this.URL)
}

crearInven(Inventory:Inventory):Observable<Inventory>{
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Inventory>(this.URL,Inventory,{headers})
}

deleteInven(id:number):Observable<void>{
  return this.http.delete<void>(`${this.URL}/${id}`);
}

updateInven(inventory: Inventory): Observable<Inventory> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<Inventory>(`${this.URL}/${inventory.id}`, inventory, { headers });
}

getInvenById(id: number): Observable<Inventory> {
  return this.http.get<Inventory>(`${this.URL}/${id}`);
}


}

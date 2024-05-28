import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/interface/interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  URL = environment.api + '/api/order';

constructor(private http:HttpClient) { }



getOrder():Observable<Order[]>{
return this.http.get<Order[]>(this.URL)
}

crearOrden(Order:Order):Observable<Order>{
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Order>(this.URL,Order,{headers})
}


deleteOrden(id:number):Observable<void>{
  return this.http.delete<void>(`${this.URL}/${id}`);
}

getOrderById(id: number): Observable<Order> {
  return this.http.get<Order>(`${this.URL}/${id}`);
}

updateOrder(Order:Order): Observable<Order> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<Order>(`${this.URL}/${Order.id}`, Order, { headers });
}

}

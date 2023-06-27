import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from './venta';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  url_base : string  = 'http://localhost:8080/api/ventas';

  constructor(private http: HttpClient) { }

  getVentas():Observable<Venta[]>{
    return this.http.get<Venta[]>(`${this.url_base}/listar`);
  }

  postVenta(postData :any){
    return this.http.post(`${this.url_base}/crear`,postData);
  }
}

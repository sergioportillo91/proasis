import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url_base : string  = 'http://localhost:8080/api/clients';

  constructor(private http: HttpClient) { }

  getAll():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.url_base}/listar`);
  }

  addEditClient(postData :any,selectedCliente: any){
    if(!selectedCliente){
      return this.http.post(`${this.url_base}/crear`,postData);
    }else{
      return this.http.put(`${this.url_base}/modificar/${selectedCliente.id}`,postData);
    }
  }

  delete(ClienteId:number){
    return this.http.delete(`${this.url_base}/${ClienteId}`);
  }

  getById(ClienteId:number){
    return this.http.get(`${this.url_base}/${ClienteId}`);
  }
}

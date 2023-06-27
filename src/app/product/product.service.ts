import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

   url_base : string  = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) { }

  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.url_base}/listar`);
  }

  addEditProduct(postData :any,selectedProduct: any){
    if(!selectedProduct){
      return this.http.post(`${this.url_base}/crear`,postData);
    }else{
      return this.http.put(`${this.url_base}/modificar/${selectedProduct.id}`,postData);
    }
  }

  deleteProduct(productId:number){

    return this.http.delete(`${this.url_base}/${productId}`);
  }

  getProductById(productId:number){

    return this.http.get(`${this.url_base}/${productId}`);
  }

  updateStockProduct(productId:number,cantidad:number){
    return this.http.put(`${this.url_base}/actualizarStock/${productId}/${cantidad}`,null);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Product {
  // private api='http://localhost:3000/api/products';
  private api='https://ecommerce-backend-3-lxnm.onrender.com/api/products';
  constructor(private http:HttpClient){

  }

  getProducts(){
    return this.http.get<any[]>(this.api);

  }
  addProduct(data:FormData){
    return this.http.post(`${this.api}/add`,data);
  }
  deleteProduct(id:string){
    return this.http.delete(`${this.api}/${id}`);
  }
}

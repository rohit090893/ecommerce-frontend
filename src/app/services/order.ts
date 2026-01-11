import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Order {
  // private api='http://localhost:3000/api';
  private api='https://ecommerce-backend-3-lxnm.onrender.com/api';
  constructor(private http:HttpClient){

  }
  createPaymentOrder(amount:number){
    console.log("Order total is :",amount);
    return this.http.post<any>(
      `${this.api}/payments/create-order`,
      {amount}
    );
  }
  saveOrder(data:any){
    return this.http.post(`${this.api}/orders`,data);
  }

  getMyOrders(){
    return this.http.get<any[]>(`${this.api}/orders/my`);
  }
  getAllOrders(){
    return this.http.get<any[]>(`${this.api}/orders`);
  }


}

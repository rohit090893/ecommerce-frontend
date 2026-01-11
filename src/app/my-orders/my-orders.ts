import { Component, OnInit } from '@angular/core';
import { Order } from '../services/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  imports: [CommonModule],
  templateUrl: './my-orders.html',
  styleUrl: './my-orders.css',
})
export class MyOrders implements OnInit{
  orders:any[]=[];
  constructor(private orderService:Order){

  }

  ngOnInit(): void {
    this.orderService.getMyOrders().subscribe(res=>this.orders=res);
  }
}



